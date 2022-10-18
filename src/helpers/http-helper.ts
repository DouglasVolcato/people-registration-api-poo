import { HttpResponse } from "../protocols/http";
import { Person } from "../protocols/person-interface";

export class HttpHelpers {
  static badRequest(error: Error): HttpResponse {
    return {
      statusCode: 400,
      body: error,
    };
  }

  static ok(data: Person | Person[]): HttpResponse {
    return {
      statusCode: 200,
      body: data,
    };
  }
}
