import { people } from "../mocks/people";
import { Person } from "../../protocols/person-interface";
import { PersonRepositoryInterface } from "./protocols/person-repository-interface";

export class PeopleRepository implements PersonRepositoryInterface {
  create(body: Person): Person {
    people.push(body);
    return body;
  }

  delete(id: string): Person {
    const foundPerson: Person[] = [];
    people.map((obj, index) => {
      if (obj.id === id) {
        foundPerson.push(obj);
        people.splice(index, 1);
      }
    });
    return foundPerson[0];
  }

  getAll(): Person[] {
    return people;
  }

  get(id: string): Person {
    const foundPerson: Person[] = [];
    people.map((obj) => {
      if (obj.id === id) {
        foundPerson.push(obj);
      }
    });
    return foundPerson[0];
  }

  update(id: string, body: Person): Person {
    people.map((obj, index) => {
      if (obj.id === id) {
        people.splice(index, 1, body);
      }
    });
    return body;
  }
}
