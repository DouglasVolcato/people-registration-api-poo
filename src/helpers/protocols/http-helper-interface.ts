import { HttpResponse } from "../../protocols/http";
import { Person } from "../../protocols/person-interface";

export interface HttpHelpersInterface {
  badRequest(error: Error | unknown): HttpResponse;
  ok(data: Person | Person[] | unknown): HttpResponse;
}
