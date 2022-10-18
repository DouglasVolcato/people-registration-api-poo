import { PersonWithoutID } from "../protocols/person-without-id-interface";
import { Person } from "../protocols/person-interface";
import { v4 as uuid } from "uuid";
import { MissingParamError } from "../helpers/errors/MissingParam-error";
import { PersonEntityInterface } from "./protocols/person.entity.interface";

export class PersonEntity implements PersonEntityInterface {
  body: PersonWithoutID;
  id: string;

  constructor(body: PersonWithoutID) {
    this.body = body;
  }

  validate(): void {
    if (!this.body.name) {
      throw new MissingParamError("name");
    } else if (!this.body.age) {
      throw new MissingParamError("age");
    } else if (!this.body.profession) {
      throw new MissingParamError("profession");
    }
  }

  getPerson(): Person {
    return {
      id: uuid(),
      name: this.body.name,
      age: Number(this.body.age),
      profession: this.body.profession,
    };
  }
}
