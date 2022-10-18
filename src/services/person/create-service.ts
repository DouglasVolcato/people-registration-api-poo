import { Person } from "../../protocols/person-interface";
import { PersonRepositoryInterface } from "../../database/repository/protocols/person-repository-interface";
import { PersonWithoutID } from "../../protocols/person-without-id-interface";
import { PersonEntity } from "../../entities/person.entity";
import { CreatePersonInterface } from "./protocols/person-services-interface";

export class CreatePersonUseCase implements CreatePersonInterface {
  personRepositoryInterface: PersonRepositoryInterface;

  constructor(personRepositoryInterface: PersonRepositoryInterface) {
    this.personRepositoryInterface = personRepositoryInterface;
  }

  execute(body: PersonWithoutID): Person {
    const newPerson = new PersonEntity(body);
    newPerson.validate();
    return this.personRepositoryInterface.create(newPerson.getPerson());
  }
}
