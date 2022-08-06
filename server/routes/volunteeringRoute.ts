import volunteeringController from "../controllers/volunteeringController.js";
import express from "express";
import auth from "../middlewares/authMiddleware.js";
import checkRole from "../middlewares/roleMiddleware.js";
const volunteeringRouter = express.Router();

const volunteerController= new volunteeringController();

volunteeringRouter.get("/", volunteerController.getVolunteering);

volunteeringRouter.get("/:id", volunteerController.getVolunteeringById);

volunteeringRouter.post("/mv", [auth, checkRole("association")], volunteerController.getMyVolunteerings)

volunteeringRouter.post("/rv", [auth, checkRole("user")], volunteerController.getRegisteredVolunteerings)

volunteeringRouter.post("/", [auth, checkRole("association")], volunteerController.createVolunteering);

volunteeringRouter.delete("/:id", [auth, checkRole("association")], volunteerController.deleteVolunteering);

volunteeringRouter.patch("/", [auth, checkRole("association")], volunteerController.updateVolunteering);

volunteeringRouter.post("/volunteer", [auth, checkRole("user")], volunteerController.volunteer);

export default volunteeringRouter;
