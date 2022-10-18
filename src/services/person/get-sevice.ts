import { Person } from "../../protocols/person-interface";
import { PersonRepositoryInterface } from "../../database/repository/protocols/person-repository-interface";
import { GetPersonInterface } from "./protocols/person-services-interface";

export class GetPersonUseCase implements GetPersonInterface {
  personRepositoryInterface: PersonRepositoryInterface;

  constructor(personRepositoryInterface: PersonRepositoryInterface) {
    this.personRepositoryInterface = personRepositoryInterface;
  }

  execute(id: string): Person {
    return this.personRepositoryInterface.get(id);
  }
}
