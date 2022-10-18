import { PersonControllerInterface } from "../controllers/protocols/controller-interface";
import { Request, Response } from "express";

export class PersonRoutes {
  personController: PersonControllerInterface;
  router: any;

  constructor(personController: PersonControllerInterface, router: any) {
    this.personController = personController;
    this.router = router;
  }

  route() {
    this.router.post("/create", (req: Request, res: Response) =>
      this.personController.create(req, res)
    );

    this.router.delete("/delete/:id", (req: Request, res: Response) =>
      this.personController.delete(req, res)
    );

    this.router.get("/get/:id", (req: Request, res: Response) =>
      this.personController.get(req, res)
    );

    this.router.get("/get-all", (req: Request, res: Response) =>
      this.personController.getAll(req, res)
    );

    this.router.put("/update/:id", (req: Request, res: Response) =>
      this.personController.update(req, res)
    );

    return this.router;
  }
}
