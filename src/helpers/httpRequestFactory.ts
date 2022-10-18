import { Request } from "express";

export function makeHttpRequest(req: Request) {
  return { body: req.body, id: req.params.id };
}
