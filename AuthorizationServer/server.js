const express = require("express");
const cors = require("cors");
const authRouter = require("./AuthRouter");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect("mongodb+srv://urakost427:UoiCCDNTux2RfeZr@authorization.zucsly3.mongodb.net/?retryWrites=true&w=majority&appName=Authorization")
    app.listen(PORT, () => {
      console.log(`Work on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();


