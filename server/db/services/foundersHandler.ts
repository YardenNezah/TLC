import founder from "../models/founders.js";

class foundersHandler {
  static async getFoundersHandler() {
    const result = await founder.find();
    return result;
  }

  static async getFounderByIdHandler(id: any) {
    const result = await founder.findById(id);
    return result;
  }

  static async createFounderHandler(data: any) {
    try {
      const newFounder = new founder({ ...data });
      await newFounder.save();
      return true;
    } catch (err) {
      return false;
    }
  }

  static async deleteFounderHandler(id: any) {
    try {
      await founder.findByIdAndDelete(id);
      return true;
    } catch (err) {
      return false;
    }
  }

  static async updateFounderHandler(id: any, document: any) {
    try {
      await founder.findByIdAndUpdate(id, { ...document });
      return true;
    } catch (err) {
      return false;
    }
  }
}


export default foundersHandler;