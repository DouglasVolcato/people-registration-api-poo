import { Person } from "../../../database/protocols/person-interface";

export interface CreatePersonInterface {
  execute(body: Person): Person;
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
  execute(id: string, body: Person): Person;
}

export interface PersonServicesInterface {
  createPersonUseCase: CreatePersonInterface;
  deletePersonUseCase: DeletePersonInterface;
  getPersonUseCase: GetPersonInterface;
  getAllPersonUseCase: GetAllPersonInterface;
  updatePersonUseCase: UpdatePersonInterface;
}
