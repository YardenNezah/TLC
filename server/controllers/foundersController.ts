import foundersHandler from '../db/services/foundersHandler.js';
import { Request, Response } from 'express';

class foundersController {
  async getFounders(req: Request, res: Response) {
    const result = await foundersHandler.getFoundersHandler();
    if (result) return res.status(200).json({ result });
    return res.status(500).send("Internal error.");
  }

  async getFounderById(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) return res.status(400).send("no id.");
    const result = await foundersHandler.getFounderByIdHandler(id);
    if (result) return res.status(200).json({ result });
    return res.status(500).send("Internal error.");
  }

  async createFounder(req: Request, res: Response) {
    const result = await foundersHandler.createFounderHandler(req.body);
    if (result) return res.status(200).send("Founder created successfuly");
    return res.status(500).send("Internal error.");
  }

  async deleteFounder(req: Request, res: Response) {
    const result = await foundersHandler.deleteFounderHandler(req.params.id);
    if (result) return res.status(200).send("Founder deleted successfuly");
    return res.status(500).send("Internal error.");
  }

  async updateFounder(req: Request, res: Response) {
    const result = await foundersHandler.updateFounderHandler(req.params.id, req.body.document);
    if (result) return res.status(200).send("Founder updated successfuly");
    return res.status(500).send("Internal error.");
  }
}

export default foundersController
