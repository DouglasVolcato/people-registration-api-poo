import { PersonServicesInterface } from "../services/person/protocols/person-services-interface";
import { PersonControllerInterface } from "./protocols/person-controllers-interface";
import { PersonWithoutID } from "../protocols/person-without-id-interface";
import { HttpRequest, HttpResponse } from "../protocols/http";
import { HttpHelpers } from "../helpers/http-helper";
import { MissingParamError } from "../helpers/errors/MissingParam-error";

export class PersonController implements PersonControllerInterface {
  personServices: PersonServicesInterface;

  constructor(personServices: PersonServicesInterface) {
    this.personServices = personServices;
  }

  create(httpRequest: HttpRequest): HttpResponse {
    try {
      const body: PersonWithoutID = httpRequest.body;
      const data = this.personServices.createPersonUseCase.execute(body);
      return HttpHelpers.ok(data);
    } catch (error) {
      return HttpHelpers.badRequest(error);
    }
  }

  delete(httpRequest: HttpRequest): HttpResponse {
    const id: string | undefined = httpRequest.id;
    if (id) {
      const data = this.personServices.deletePersonUseCase.execute(id);
      return HttpHelpers.ok(data);
    } else {
      return HttpHelpers.badRequest(new MissingParamError("id"));
    }
  }

  get(httpRequest: HttpRequest): HttpResponse {
    const id: string | undefined = httpRequest.id;
    if (id) {
      const data = this.personServices.getPersonUseCase.execute(id);
      return HttpHelpers.ok(data);
    }
    return HttpHelpers.badRequest(new MissingParamError("id"));
  }

  getAll(httpRequest: HttpRequest): HttpResponse {
    const data = this.personServices.getAllPersonUseCase.execute();
    return HttpHelpers.ok(data);
  }

  update(httpRequest: HttpRequest): HttpResponse {
    try {
      const id: string | undefined = httpRequest.id;
      if (id) {
        const body: PersonWithoutID = httpRequest.body;
        const data = this.personServices.updatePersonUseCase.execute(id, body);
        return HttpHelpers.ok(data);
      }
      return HttpHelpers.badRequest(new MissingParamError("id"));
    } catch (error) {
      return HttpHelpers.badRequest(error);
    }
  }
}
