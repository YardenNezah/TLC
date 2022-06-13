import volunteeringHandler from '../db/services/volunteeringHandler.js';
import { Request, Response } from 'express';

class volunteeringController {
  async getVolunteering(req: Request, res: Response) {
    const result = await volunteeringHandler.getVolunteeringHandler();
    if (result) return res.status(200).json({ result });
    return res.status(500).send("Internal error.");
  }

  async getVolunteeringById(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) return res.status(400).send("no id.");
    const result = await volunteeringHandler.getVolunteeringByIdHandler(id);
    if (result) return res.status(200).json({ result });
    return res.status(500).send("Internal error.");
  }

  async createVolunteering(req: Request, res: Response) {
    const result = await volunteeringHandler.createVolunteeringHandler(req.body);
    if (result) return res.status(200).send("Volunteering created successfuly");
    return res.status(500).send("Internal error.");
  }

  async deleteVolunteering(req: Request, res: Response) {
    const result = await volunteeringHandler.deleteVolunteeringHandler(req.params.id);
    if (result) return res.status(200).send("Volunteering deleted successfuly");
    return res.status(500).send("Internal error.");
  }

  async updateVolunteering(req: Request, res: Response) {
    const result = await volunteeringHandler.updateVolunteeringHandler(req.params.id, req.body.document);
    if (result) return res.status(200).send("Volunteering updated successfuly");
    return res.status(500).send("Internal error.");
  }

  async volunteer(req: Request, res: Response) {
    const result = await volunteeringHandler.volunteerHandler(req.body);
    if (result) return res.status(200).send("Volunteering accepted.");
    return res.status(500).send("Internal error.");
  }

  async getMyVolunteerings (req: Request, res: Response) {
    const result = await volunteeringHandler.getMyVolunteeringsHandler(req.body.user);
    if (result) return res.status(200).json({result});
    return res.status(500).send("Internal error.");
  }

  async getRegisteredVolunteerings (req: Request, res: Response) {
    const result = await volunteeringHandler.getRegisteredVolunteeringsHandler(req.body.user);
    if (result) return res.status(200).json({result});
    return res.status(500).send("Internal error.");
  }
}

export default volunteeringController
