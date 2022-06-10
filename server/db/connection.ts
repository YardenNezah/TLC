import mongoose from "mongoose";
import founder from "./models/founders.js";
import volunteering from "./models/volunteering.js";

const connection = mongoose.connect(
  "mongodb+srv://tlc:tlc1234@cluster0.lrytr.mongodb.net/TLC?retryWrites=true&w=majority",
  () => {
    console.log("db connected successfuly.");
  }
);

export default connection;
