import foundersController from "../controllers/foundersController.js";
import express from "express";
const founderRouter = express.Router();

const founderController= new foundersController;

founderRouter.get("/", founderController.getFounders);

founderRouter.get("/:id", founderController.getFounderById);

founderRouter.post("/", founderController.createFounder);

founderRouter.delete("/:id", founderController.deleteFounder);

founderRouter.patch("/",founderController.updateFounder);

export default founderRouter;

