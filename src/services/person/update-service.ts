import { Person } from "../../protocols/person-interface";
import { PersonRepositoryInterface } from "../../database/repository/protocols/person-repository-interface";
import { PersonWithoutID } from "../../protocols/person-without-id-interface";
import { UpdatePersonInterface } from "./protocols/person-services-interface";

export class UpdatePersonUseCase implements UpdatePersonInterface {
  personRepositoryInterface: PersonRepositoryInterface;

  constructor(personRepositoryInterface: PersonRepositoryInterface) {
    this.personRepositoryInterface = personRepositoryInterface;
  }

  execute(id: string, body: PersonWithoutID): Person {
    const foundUser = this.personRepositoryInterface.get(id);
    const assignedBody = Object.assign(foundUser, body);
    return this.personRepositoryInterface.update(id, assignedBody);
  }
}
