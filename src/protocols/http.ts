export interface HttpRequest {
  id?: string;
  body?: any;
}

export interface HttpResponse {
  statusCode: number;
  body: any;
}
