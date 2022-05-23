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
        association: "Yahad",
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
      {
        association: "Ruach Tova",
        name: "Helping poor people",
        date: new Date("June 5, 2022 03:24:00"),
        volunteersQuantity: 1,
        description:
          "The Ted Arison Family Foundation adopted Ruach Tova (Hebrew for Good Spirit), coordinators and promoters of volunteerism in Israel. Ruach Tova connects between individuals who want to volunteer and those in the Israeli community who seek volunteers, serving as a one stop shop for information on volunteering in Israel. Individuals, groups, communities, organizations, and businesses in Israel, all turn to Ruach Tova, who also welcome visitors in Israel that want to volunteer as part of their stay.",
        address: "noah 5 Tel Aviv",
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
        siteLink: "https://www.ufis.org.il/",
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
        siteLink: "https://akimisrael.com",
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
        siteLink: "https://www.latet.org.il/he/",
      },
      {
        name: "Ruach Tova",
        description:
          "The Ted Arison Family Foundation adopted Ruach Tova (Hebrew for Good Spirit), coordinators and promoters of volunteerism in Israel. Ruach Tova connects between individuals who want to volunteer and those in the Israeli community who seek volunteers, serving as a one stop shop for information on volunteering in Israel. Individuals, groups, communities, organizations, and businesses in Israel, all turn to Ruach Tova, who also welcome visitors in Israel that want to volunteer as part of their stay.",
        city: "Tel Aviv",
        street: "Habonim 23",
        field: "volunteering",
        phone: 35436868,
        targetAudience: "children",
        email: "info@ruachtova.org.il",
        mobileImage:
          "data:image/png;base64,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",
        desktopImage:
          "data:image/png;base64,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",
        bigImage:
          "data:image/png;base64,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",
        isPopular: false,
        openingHour: "0900",
        closingHour: "2200",
        isNewAssociation: false,
        siteLink: "https://www.ruachtova.org.il/",
      },
      {
        name: "ILAN",
        description:
          "ILAN is Israel’s largest Association for Children with Disabilities, established in 1952 assisting each yearthousands of children, youth and adults suffering from neuromuscular disorders such as infantile paralysis, cerebral palsy, and muscular dystrophy.",
        city: "Tel Aviv",
        street: "Habonim 13",
        field: "children",
        phone: 35248141,
        targetAudience: "children",
        email: "ilan@ilan-israel.co.il",
        mobileImage:
          "https://www.tzomet-ran.co.il/wp-content/uploads/2019/03/5a882d60036411fd7bc67d3701a40aa0.jpg",
        desktopImage:
        "https://www.tzomet-ran.co.il/wp-content/uploads/2019/03/5a882d60036411fd7bc67d3701a40aa0.jpg",        
        bigImage:
        "https://www.tzomet-ran.co.il/wp-content/uploads/2019/03/5a882d60036411fd7bc67d3701a40aa0.jpg",        
        isPopular: false,
        openingHour: "0900",
        closingHour: "2200",
        isNewAssociation: false,
        siteLink: "https://www.ilan-israel.co.il/",
      },
      {
        name: "Food for life",
        description:
          " the Food for Life Association NPO stands at the forefront of national service in adopting families in need and providing food for the hungry and destitute.",
        city: "Petach Tikva",
        street: "Macabim 17",
        field: "food",
        phone: 1700508850,
        targetAudience: "children",
        email: "pt@food-forlife.org",
        mobileImage:
          "data:image/png;base64,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",
        desktopImage:
          "data:image/png;base64,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",
        bigImage:
          "data:image/png;base64,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",
        isPopular: false,
        openingHour: "0900",
        closingHour: "2200",
        isNewAssociation: false,
        siteLink: "https://www.food-forlife.org/",
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
