import associationsController from "../controllers/associationsController.js";
import express from "express";
const associationRouter = express.Router();

const associationController= new associationsController;

associationRouter.get("/", associationController.getAssociations);

associationRouter.get("/:filter", associationController.filterAssociations);

associationRouter.get("/:id", associationController.getAssociationById);

associationRouter.post("/", associationController.createAssociation);

associationRouter.delete("/:id", associationController.deleteAssociation);

associationRouter.patch("/", associationController.updateAssociation);

export default associationRouter; 