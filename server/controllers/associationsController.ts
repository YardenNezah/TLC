import associationsHandler from '../db/services/associationsHandler.js';
import { Request, Response } from 'express';

class associationsController {
  async getAssociations(req: Request, res: Response) {
    const result = await associationsHandler.getAssociationsHandler();
   if (result) return res.status(200).json({ result });   
  return res.status(500).send("Internal error.");
  }

  async filterAssociations(req: Request, res: Response) {
    const { filter }: any = req.params.filter;
    const result = await associationsHandler.filterAssociationsHandler(req.params.filter);    
    if (result) return res.status(200).json({ result });
    return res.status(500).send("Internal error.");
  }

  async getAssociationById(req: Request, res: Response) {
    const { id }:any = req.params._id;
    if (!id) return res.status(400).send("no id.");
    const result = await associationsHandler.getAssociationByIdHandler(req.params._id);
    if (result) return res.status(200).json({ result });
    return res.status(500).send("Internal error.");
  }

  async createAssociation(req: Request, res: Response) {
    const result = await associationsHandler.createAssociationHandler(req.body);
    if (result) return res.status(200).send("association created successfuly");
    return res.status(500).send("Internal error.");
  }

  async deleteAssociation(req: Request, res: Response) {
    const result = await associationsHandler.deleteAssociationHandler(req.params.id);
    if (result) return res.status(200).send("association deleted successfuly");
    return res.status(500).send("Internal error.");
  }

  async updateAssociation(req: Request, res: Response) {
    const result = await associationsHandler.updateAssociationHandler(req.params.id, req.body.document);
    if (result) return res.status(200).send("association updated successfuly");
    return res.status(500).send("Internal error.");
  }
}

export default associationsController
