import association from "../models/association.js";

class associationsHandler {
  static async getAssociationsHandler() {
    const result = await association.find().limit(6);
    return result;
  }

  static async filterAssociationsHandler(filter: any) {
    const date = new Date();
    const now: any = date.getHours()+'00';
    if (filter === "new")
      return await association.find({ isNewAssociation: true }).limit(6);
    if (filter === "popular") {     
      return await association.find({ isPopular: true }).limit(6);
    }
    if (filter === "open") {
      const open: any = await association.find({closingHour: {$gte: now}});
      return await open;
    }
    if(!filter) {
      filter = "all";
    }
  }

  static async getAssociationByIdHandler(_id: any) {
    const result = await association.findById(_id);
    return result;
  }

  static async createAssociationHandler(data: any) {
    try {
      const newAssociation = new association({ ...data });
      await newAssociation.save();
      return true;
    } catch (err) {
      return false;
    }
  }

  static async deleteAssociationHandler(id: any) {
    try {
      await association.findByIdAndDelete(id);
      return true;
    } catch (err) {
      return false;
    }
  }

  static async updateAssociationHandler(id: any, document: any) {
    try {
      await association.findByIdAndUpdate(id, { ...document });
      return true;
    } catch (err) {
      return false;
    }
  }
}

export default associationsHandler;
