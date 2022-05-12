import volunteering from "../models/volunteering.js";

class volunteeringHandler {
  static async getVolunteeringHandler() {
    const result = await volunteering.find();
    return result;
  }

  static async getVolunteeringByIdHandler(id: any) {
    const result = await volunteering.findById(id);
    return result;
  }

  static async createVolunteeringHandler(data: any) {
    try {
      const newVolunteering= new volunteering({ ...data });
      await newVolunteering.save();
      return true;
    } catch (err) {
      return false;
    }
  }

  static async deleteVolunteeringHandler(id: any) {
    try {
      await volunteering.findByIdAndDelete(id);
      return true;
    } catch (err) {
      return false;
    }
  }

  static async updateVolunteeringHandler(id: any, document: any) {
    try {
      await volunteering.findByIdAndUpdate(id, { ...document });
      return true;
    } catch (err) {
      return false;
    }
  }
}

export default volunteeringHandler;
