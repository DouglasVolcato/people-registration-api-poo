import { Request } from "express";
import { HttpRequest } from "../protocols/http";

export function makeHttpRequest(req: Request): HttpRequest {
  return { body: req.body, id: req.params.id };
}
