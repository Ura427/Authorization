const express = require("express");
const cors = require("cors");
const authRouter = require("./AuthRouter");
const mongoose = require("mongoose");
require('dotenv').config();
const PORT = process.env.PORT || 8080;

const app = express();

const corsOptions ={
  origin:'http://localhost:5173', 
  credentials:true,            
  optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSECONNECTIONSTRING)
    app.listen(PORT, () => {
      console.log(`Work on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();