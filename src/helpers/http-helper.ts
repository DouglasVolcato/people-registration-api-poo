import { HttpResponse } from "../protocols/http";
import { Person } from "../protocols/person-interface";
import { HttpHelpersInterface } from "./protocols/http-helper-interface";

export const HttpHelpers: HttpHelpersInterface = {
  badRequest(error: Error): HttpResponse {
    return {
      statusCode: 400,
      body: error,
    };
  },

  ok(data: Person | Person[]): HttpResponse {
    return {
      statusCode: 200,
      body: data,
    };
  },
};
