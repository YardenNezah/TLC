import authController from '../controllers/authController.js';
import express from "express";
import authMiddleware from '../middlewares/authMiddleware.js';
const authRouter = express.Router();

const newAuthController = new authController;

authRouter.post("/signin", newAuthController.signin);

authRouter.post("/signup", newAuthController.signup);

authRouter.get("/", newAuthController.getUsers);

authRouter.get("/:id",authMiddleware, newAuthController.getUserById);

authRouter.get("/:username",authMiddleware, newAuthController.getUserByUsername);

authRouter.delete("/:id", authMiddleware, newAuthController.deleteUser);


export default authRouter;

1. delete initial data
2. add roles - 1h
3. frontend - auth system - 1h
4. routes to UI 3h
5. prefrences AI - 2h