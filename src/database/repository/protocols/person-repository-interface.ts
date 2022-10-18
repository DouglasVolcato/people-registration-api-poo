import { Person } from "../../../protocols/person-interface";

export interface PersonRepositoryInterface {
  create(body: Person): Person;
  delete(id: string): Person;
  getAll(): Person[];
  get(id: string): Person;
  update(id: string, body: Person): Person;
}
