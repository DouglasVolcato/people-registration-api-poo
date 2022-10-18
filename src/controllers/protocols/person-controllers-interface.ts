import { HttpRequest, HttpResponse } from "../../protocols/http";

export interface PersonControllerInterface {
  create(req: HttpRequest): HttpResponse;
  delete(req: HttpRequest): HttpResponse;
  getAll(req: HttpRequest): HttpResponse;
  get(req: HttpRequest): HttpResponse;
  update(req: HttpRequest): HttpResponse;
}
