import authController from '../controllers/authController.js';
import express from "express";
import authMiddleware from '../middlewares/authMiddleware.js';

const authRouter = express.Router();

const newAuthController = new authController;

authRouter.post("/signin", newAuthController.signin);

authRouter.post("/signup", newAuthController.signup);

authRouter.get("/", newAuthController.getUsers);

authRouter.get("/getByToken",authMiddleware, newAuthController.getUserById);

authRouter.get("/getByUser/:username",authMiddleware, newAuthController.getUserByUsername);

authRouter.get('/getByRole/:role', newAuthController.getUsersByRole)

authRouter.delete("/:id", authMiddleware, newAuthController.deleteUser);


export default authRouter;