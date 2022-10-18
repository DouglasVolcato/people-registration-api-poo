import { Person } from "../../../protocols/person-interface";
import { PersonWithoutID } from "../../../protocols/person-without-id-interface";

export interface CreatePersonInterface {
  execute(body: PersonWithoutID): Person;
}

export interface DeletePersonInterface {
  execute(id: string): Person;
}

export interface GetAllPersonInterface {
  execute(): Person[];
}

export interface GetPersonInterface {
  execute(id: string): Person;
}

export interface UpdatePersonInterface {
  execute(id: string, body: PersonWithoutID): Person;
}

export interface PersonServicesInterface {
  createPersonUseCase: CreatePersonInterface;
  deletePersonUseCase: DeletePersonInterface;
  getPersonUseCase: GetPersonInterface;
  getAllPersonUseCase: GetAllPersonInterface;
  updatePersonUseCase: UpdatePersonInterface;
}
