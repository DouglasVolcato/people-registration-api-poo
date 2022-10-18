import { Person } from "../../database/protocols/person-interface";
import { Request, Response } from "express";

export interface PersonControllerInterface {
  create(req: Request, res: Response): Response;
  delete(req: Request, res: Response): Response;
  getAll(req: Request, res: Response): Response;
  get(req: Request, res: Response): Response;
  update(req: Request, res: Response): Response;
}
