import { Person } from "../../database/protocols/person-interface";
import { PersonRepositoryInterface } from "../../database/protocols/person-repository-interface";
import { CreatePersonInterface } from "./protocols/person-services-interface";

export class CreatePersonUseCase implements CreatePersonInterface {
  personRepositoryInterface: PersonRepositoryInterface;

  constructor(personRepositoryInterface: PersonRepositoryInterface) {
    this.personRepositoryInterface = personRepositoryInterface;
  }

  execute(body: Person): Person{
    return this.personRepositoryInterface.create(body);
  }
}
