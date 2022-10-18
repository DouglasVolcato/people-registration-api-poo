import { Person } from "../database/protocols/person-interface";
import { PersonServicesInterface } from "../services/person/protocols/person-services-interface";
import { PersonControllerInterface } from "./protocols/controller-interface";
import { Request, Response } from "express";

export class PersonController implements PersonControllerInterface {
  personServices: PersonServicesInterface;

  constructor(personServices: PersonServicesInterface) {
    this.personServices = personServices;
  }

  create(req: Request, res: Response): Response {
    const body: Person = req.body;
    res.send(this.personServices.createPersonUseCase.execute(body));
  }

  delete(req: Request, res: Response): Response {
    const id: string = req.params.id;
    res.send(this.personServices.deletePersonUseCase.execute(id));
  }

  get(req: Request, res: Response): Response {
    const id: string = req.params.id;
    res.send(this.personServices.getPersonUseCase.execute(id));
  }

  getAll(req: Request, res: Response): Response {
    res.send(this.personServices.getAllPersonUseCase.execute());
  }

  update(req: Request, res: Response): Response {
    const id: string = req.params.id;
    const body: Person = req.body;
    res.send(this.personServices.updatePersonUseCase.execute(id, body));
  }
}
