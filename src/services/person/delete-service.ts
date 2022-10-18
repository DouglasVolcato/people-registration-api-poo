import { Person } from "../../protocols/person-interface";
import { PersonRepositoryInterface } from "../../database/repository/protocols/person-repository-interface";
import { DeletePersonInterface } from "./protocols/person-services-interface";

export class DeletePersonUseCase implements DeletePersonInterface {
  personRepositoryInterface: PersonRepositoryInterface;

  constructor(personRepositoryInterface: PersonRepositoryInterface) {
    this.personRepositoryInterface = personRepositoryInterface;
  }

  execute(id: string): Person {
    return this.personRepositoryInterface.delete(id);
  }
}
