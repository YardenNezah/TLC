import volunteeringController from "../controllers/volunteeringController.js";
import express from "express";
const volunteeringRouter = express.Router();

const volunteerController= new volunteeringController;

volunteeringRouter.get("/", volunteerController.getVolunteering);

volunteeringRouter.get("/:id", volunteerController.getVolunteeringById);

volunteeringRouter.post("/", volunteerController.createVolunteering);

volunteeringRouter.delete("/:id", volunteerController.deleteVolunteering);

volunteeringRouter.patch("/", volunteerController.updateVolunteering);

export default volunteeringRouter;
