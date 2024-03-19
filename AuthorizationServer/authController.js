const User = require("./models/User");
const Role = require("./models/Role");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secret } = require("./config");

const generateAccessToken = ({ id, roles }) => {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class authContoller {
  async registration(req, res) {
    try {
      const { username, email, password, birthDate, gender } = req.body;

      // Check if user with the same email already exists
      const candidate = await User.findOne({ email: email });
      if (candidate) {
        return res
          .status(400)
          .json({ message: "User with current email already exists" });
      }

      const hashSalt = 7;
      const hashPassword = bcrypt.hashSync(password, hashSalt);

      // Find the default user role
      const userRole = await Role.findOne({ value: "USER" });
      console.log(userRole.value);

      // Create the user
      const user = await User.create({
        username,
        email,
        password: hashPassword,
        birthDate,
        gender,
        roles: [userRole.value],
      });

      // Save the user to the database
      await user.save();

      return res.json({ message: "User created successfully" });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: "Registration error" });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        res.status(400).json({ message: "User doesn't exists" });
      }

      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        res.status(400).json({ message: "Invalid password" });
      }
      console.log("Roles ", user.roles);
      const token = generateAccessToken({ id: user._id, roles: user.roles });
      console.log("Decoded: ", jwt.verify(token, secret));
      return res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: `Login error: ${error}` });
    }
  }

  async getUsers(req, res) {
    try {
      // const manGender = new Gender({value: "Man"});
      // const womanGender = new Gender({value: "Woman"});
      // const anotherGender = new Gender({value: "Another"});
      // await manGender.save();
      // await womanGender.save();
      // await anotherGender.save();

      const users = await User.find();

      res.json({ users });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: `Fetching users error: ${error}` });
    }
  }
}

module.exports = new authContoller();
