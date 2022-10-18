import { Person } from "../../database/protocols/person-interface";
import { PersonRepositoryInterface } from "../../database/protocols/person-repository-interface";
import { UpdatePersonInterface } from "./protocols/person-services-interface";

export class UpdatePersonUseCase implements UpdatePersonInterface {
  personRepositoryInterface: PersonRepositoryInterface;

  constructor(personRepositoryInterface: PersonRepositoryInterface) {
    this.personRepositoryInterface = personRepositoryInterface;
  }

  execute(id: string, body: Person): Person {
    return this.personRepositoryInterface.update(id, body);
  }
}
