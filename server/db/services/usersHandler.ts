import user from "../models/user.js";

class usersHandler {
  static async getUserByIdHandler(id: string) {
    try {
      const result = await user.findById(id);
      console.log(result)
      if (result) return result;
    }
    catch(err) { return false}
  }

  static async getUserByUsernameHandler(username: string) {
    const result = await user.findOne({ username });
    return result;
  }

  static async getUsersByRoleHandler(role: string) {
    const result = await user.find({ role });
    return result;
  }

  static async getUsersHandler() {
    const result = await user.find();
    return result;
  }

  static async createUserHandler(data: any) {
    try {
      const newUser = new user({ ...data });
      const result = await newUser.save();
      return result;
    } catch (err) {
      console.log(err)
      return false;
    }
  }

  static async deleteUserHandler(id: string) {
    try {
      await user.findByIdAndDelete({ id });
      return true;
    } catch (err) {
      return false;
    }
  }
}

export default usersHandler;
