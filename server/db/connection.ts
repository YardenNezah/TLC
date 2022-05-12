import mongoose from "mongoose";
import founder from "./models/founders.js";
import volunteering from "./models/volunteering.js";
import association from "./models/association.js";

const dbInit = async () => {
  const founderCount = await founder.countDocuments();
  const volunteeringCount = await volunteering.countDocuments();
  const associationCount = await association.countDocuments();

  const associationImages: any = {
    akim: "https://i.ibb.co/GVMVzDf/akim.png",
    desktopAkim: "https://i.ibb.co/GVMVzDf/akim.png",
    bigAkim: "https://i.ibb.co/GVMVzDf/akim.png",
    yahad: "https://i.ibb.co/qpyV5R3/yahad.jpg",
    desktopYahad: "https://i.ibb.co/qpyV5R3/yahad.jpg",
    bigYahad: "https://i.ibb.co/qpyV5R3/yahad.jpg",
    latet: "https://i.ibb.co/VWCBrWS/latet.jpg",
    desktopLatet: "https://i.ibb.co/VWCBrWS/latet.jpg",
    bigLatet: "https://i.ibb.co/VWCBrWS/latet.jpg",
  };

  if (volunteeringCount === 0) {
    volunteering.insertMany([
      {
        association: "Akim",
        name: "Working with children and youth",
        date: new Date("December 17, 2022 03:24:00"),
        volunteersQuantity: 5,
        description:
          "When you volunteer with one of our children's services, you will be helping the Akim’s most disadvantaged children and young people in the most direct way possible. ",
        address: "Rotchild 14 Tel Aviv",
      },
      {
        association: "Yahad- United for Israels Soldiers Foundation",
        name: "Food Delivery On Military Bases",
        date: new Date("May 20, 2022 03:24:00"),
        volunteersQuantity: 2,
        description:
          "We provide challah to those in need every week to make sure they have a happy Sabbath",
        address: "Machne Yarden",
      },
      {
        association: "LATET- to give",
        name: "Helping Holocaust survivors",
        date: new Date("June 1, 2022 03:24:00"),
        volunteersQuantity: 2,
        description:
          "supporting a Holocaust survivor in need is an amazing experience that creates a long-term, meaningful relationship.",
        address: "hertzel 5 Rishon Lezion",
      },
    ]);
  }
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
  if (associationCount === 0) {
    association.insertMany([
      {
        name: "Yahad",
        description:
          "Yahad is the portal and sole avenue through which donations can be made direct to IDF soldiers and IDF units. Yahad – United for Israel’s Soldiers is also the leading organization conducting activities for the wellbeing of Israel’s soldiers",
        city: "Rishon Lezion",
        street: "Nov 3",
        field: "Defense and military",
        phone: 547606388,
        targetAudience: "soldiers",
        email: "rishon106@gmail.com",
        mobileImage: associationImages.yahad,
        desktopImage: associationImages.desktopYahad,
        bigImage: associationImages.bigYahad,
        isPopular: true,
        openingHour: "0900",
        closingHour: "2200",
        isNewAssociation: true,
      },
      {
        name: "Akim",
        description:
          "AKIM Israel is the Israeli national organization for people with intellectual disabilities and their families, operating as a person-centered organization. Founded in 1951, AKIM Israel acts to realize the rights, promote a better quality of life, and improve the welfare of some 35,000 people with intellectual disabilities and approximately 140,000 family members and legal guardians. We operate in 65 branches and 88 municipalities nationwide, managed by parents and volunteers in the Jewish and Arab sectors.",
        city: "Tel Aviv",
        street: "Pinchas Rosen 69",
        field: "idf",
        phone: 547606388,
        targetAudience: "soldiers",
        email: "moshe.aviv@akim.org.il",
        mobileImage: associationImages.akim,
        desktopImage: associationImages.desktopAkim,
        bigImage: associationImages.bigAkim,
        isPopular: true,
        openingHour: "0900",
        closingHour: "2200",
        isNewAssociation: true,
      },
      {
        name: "LATET- to give",
        description:
          "LATET was established in order to reduce poverty, for a better and just society, by providing assistance to populations in need, mobilizing Israeli civil society toward mutual responsibility, and leading change in the national priorities",
        city: "Tel Aviv",
        street: "Hamasger 44",
        field: "idf",
        phone: 547606388,
        targetAudience: "soldiers",
        email: "latet@latet.org.il",
        mobileImage: associationImages.latet,
        desktopImage: associationImages.desktopLatet,
        bigImage: associationImages.bigLatet,
        isPopular: true,
        openingHour: "0900",
        closingHour: "2200",
        isNewAssociation: true,
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
