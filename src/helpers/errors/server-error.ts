export class SeverError extends Error {
  constructor() {
    super("Internal server error");
    this.name = "Internal server error";
  }
}
