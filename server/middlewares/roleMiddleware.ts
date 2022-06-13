import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import usersHandler from "../db/services/usersHandler.js";

const checkRole = (wantedRole: string) => async (req: Request, res: Response, next: NextFunction) => {
    if(req.body.user.role === wantedRole) return next();
    return res.status(403).send("access denied."); 
}
export default checkRole;