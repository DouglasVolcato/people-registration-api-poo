import { PersonController } from "../controllers/person-controller";
import { PeopleRepository } from "../database/repository/people-repository";
import { PersonRoutes } from "../routes/person-routes";
import { Router } from "express";
import * as services from "../services/person";

export function makePersonFactory(router: Router): PersonRoutes {
  const peopleRepository = new PeopleRepository();

  const createPersonUseCase = new services.CreatePersonUseCase(
    peopleRepository
  );
  const deletePersonUseCase = new services.DeletePersonUseCase(
    peopleRepository
  );
  const getPersonUseCase = new services.GetPersonUseCase(peopleRepository);
  const getAllPersonUseCase = new services.GetAllPersonUseCase(
    peopleRepository
  );
  const updatePersonUseCase = new services.UpdatePersonUseCase(
    peopleRepository
  );

  const personController = new PersonController({
    createPersonUseCase,
    deletePersonUseCase,
    getPersonUseCase,
    getAllPersonUseCase,
    updatePersonUseCase,
  });

  const personRoutes = new PersonRoutes(personController, router);

  return personRoutes;
}
