import { Request, Response } from "express";
import usersHandler from "../db/services/usersHandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class authController {
  async getUserByToken(req: Request, res: Response) {
    const _id = req.body.user._id
    if (!_id) return res.status(400).send("no id.");
    const result = await usersHandler.getUserByIdHandler(_id);
    if (result) return res.status(200).json({ result });
    return res.status(500).send("Internal error.");
  }

  async getUserById(req: Request, res: Response) {
    const _id = req.params.id
    if (!_id) return res.status(400).send("no id.");
    const result = await usersHandler.getUserByIdHandler(_id);
    console.log(result)
    if (result) return res.status(200).json({ result });
    return res.status(500).send("Internal error.");
  }

  async getUserByUsername(req: Request, res: Response) {
    const { username } = req.params;
    if (!username) return res.status(400).send("no username.");
    const result = await usersHandler.getUserByUsernameHandler(username);
    if (result) return res.status(200).json({ result });
    return res.status(500).send("Internal error.");
  }

  async getUsersByRole(req: Request, res: Response) {
    const { role } = req.params;
    if (!role) return res.status(400).send("no role.");
    const result = await usersHandler.getUsersByRoleHandler(role);
    if (result) return res.status(200).json({ result });
    return res.status(500).send("Internal error.");
  }

  async getUsers(req: Request, res: Response) {
    const result = await usersHandler.getUsersHandler();
    if (result) return res.status(200).json({ result });
    return res.status(500).send("Internal error.");
  }

  async signin(req: Request, res: Response) {
    let { username, password } = req.body;
    const result = await usersHandler.getUserByUsernameHandler(username);
    if (!result)
      return res.status(400).send("username or password is incorrect.");

    const match = await bcrypt.compare(password, result.password);
    const tokenSecret: any = process.env.TOKEN_SECRET;
    if (!match)
      return res.status(400).send("username or password is incorrect.");
    const token = jwt.sign(JSON.stringify({ id: result._id }), tokenSecret);
    if (!token) return res.status(500).send("Internal error.");
    return res.status(200).json({ token, role: result.role});
  }

  async signup(req: Request, res: Response) {
    let { username, password, name, role, email, phone, associationDetails, keywords } = req.body;
    const roleData = role === "association" ? {associationDetails} : {keywords}
    password = await bcrypt.hash(password, 10);
    const result = await usersHandler.createUserHandler({
      ...roleData,
      username,
      password,
      name,
      phone,
      email,
      role,
    });
    if (!result._id) return res.status(500).send("Internal error.");
    const tokenSecret: any = process.env.TOKEN_SECRET;
    const token = jwt.sign(JSON.stringify({ id: result._id }), tokenSecret);
    if (!token) return res.status(500).send("Internal error.");
    return res.status(200).json({ token, role });
  }

  async deleteUser(req: Request, res: Response) {
    const result = await usersHandler.deleteUserHandler(req.body.user._id);
    if (result) return res.status(200).send("User deleted successfuly");
    return res.status(500).send("Internal error.");
  }
}

export default authController;
