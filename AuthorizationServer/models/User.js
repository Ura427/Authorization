const { Schema, model } = require("mongoose");

const birthDateSchema = new Schema({
  day: { type: String, default: "" },
  month: { type: String, default: "" },
  year: { type: String, default: "" },
});

const User = new Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  birthDate: birthDateSchema,
  // gender: { type: String, ref: "Gender" },
  gender: { type: String, required: true },
  roles: [{ type: String, ref: "Role" }],
});

module.exports = model("User", User);
