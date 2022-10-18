import { Request, Response, Router } from "express";
import { PersonControllerInterface } from "../controllers/protocols/person-controllers-interface";
import { makeHttpRequest } from "../helpers/httpRequestFactory";
import { PersonRoutesInterface } from "./protocols/person-routes-interface";

export class PersonRoutes implements PersonRoutesInterface {
  personController: PersonControllerInterface;
  router: Router;

  constructor(personController: PersonControllerInterface, router: Router) {
    this.personController = personController;
    this.router = router;
  }

  route(): Router {
    this.router.post("/create", (req: Request, res: Response) => {
      const httpRequest = makeHttpRequest(req);
      const httpResponse = this.personController.create(httpRequest);
      res.status(httpResponse.statusCode).json(httpResponse.body);
    });

    this.router.delete("/delete/:id", (req: Request, res: Response) => {
      const httpRequest = makeHttpRequest(req);
      const httpResponse = this.personController.delete(httpRequest);
      res.status(httpResponse.statusCode).json(httpResponse.body);
    });

    this.router.get("/get/:id", (req: Request, res: Response) => {
      const httpRequest = makeHttpRequest(req);
      const httpResponse = this.personController.get(httpRequest);
      res.status(httpResponse.statusCode).json(httpResponse.body);
    });

    this.router.get("/get-all", (req: Request, res: Response) => {
      const httpRequest = makeHttpRequest(req);
      const httpResponse = this.personController.getAll(httpRequest);
      res.status(httpResponse.statusCode).json(httpResponse.body);
    });

    this.router.put("/update/:id", (req: Request, res: Response) => {
      const httpRequest = makeHttpRequest(req);
      const httpResponse = this.personController.update(httpRequest);
      res.status(httpResponse.statusCode).json(httpResponse.body);
    });

    return this.router;
  }
}
