import { Person } from "../../protocols/person-interface";

export interface PersonEntityInterface {
  validate(): void;
  getPerson(): Person;
}
