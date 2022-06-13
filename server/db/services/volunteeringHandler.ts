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
      const newVolunteering= new volunteering({ ...data, associationId: data.user._id});
      await newVolunteering.save();
      return true;
    } catch (err) {
      console.log(err)
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

  static async volunteerHandler(data: any) {
    
    const {volunteeringId, user} = data
    try {
      const currentVolunteering = await volunteering.findById(volunteeringId)
      await volunteering.findByIdAndUpdate(volunteeringId, {
        volunteers: [...currentVolunteering.volunteers, user._id]
      })
      return true
    }
    catch(err) {
      return false;
    }
  }

  static async getMyVolunteeringsHandler(user: any) {
    try {
      console.log(user._id)
    const res = volunteering.find({associationId: user._id})
    if(res) return res
    else return false
    }
    catch(err) {
      return false
    }
  }

  static async getRegisteredVolunteeringsHandler(user: any) {
    try {
      const res = volunteering.find({ favouriteFoods: { "$in" : [user._id]} })
      if(res) return res
      else return false
      }
      catch(err) {
        return false
      }
  }
}

export default volunteeringHandler;
