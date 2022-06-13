import mongoose from "mongoose";
import founder from "./models/founders.js";

const dbInit = async () => {
  const founderCount = await founder.countDocuments();
  if (founderCount === 0) {
    founder.insertMany([
      {
        founderName: "Yarden Tsaraf",
        founderDescription: "student",
        founderImage: "https://i.ibb.co/9rGVQDT/yarden.jpg",
        founderLinkedin: "https://www.linkedin.com/in/yarden-tsaraf",
        founderEmail: "yardentsaraf@gmail.com",
        founderAge: 24,
      },
      {
        founderName: "Raz Elkabets",
        founderDescription: "student",
        founderImage: "https://i.ibb.co/QdbysSB/raz.jpg",
        founderLinkedin: "https://www.linkedin.com/in/yarden-tsaraf",
        founderEmail: "razelkabets050@gmail.com",
        founderAge: 25,
      },
      {
        founderName: "Lian Nidam",
        founderDescription: "student",
        founderImage: "https://i.ibb.co/TBjCQnG/lian.jpg",
        founderLinkedin: "https://www.linkedin.com/in/yarden-tsaraf",
        founderEmail: "liannidam04@gmail.com",
        founderAge: 24,
      },
    ]);
  }
};

const connection = mongoose.connect(
  "mongodb+srv://tlc:tlc1234@cluster0.lrytr.mongodb.net/TLC?retryWrites=true&w=majority",
  () => {
    console.log("db connected successfuly.");
    dbInit();
  }
);

export default connection;
