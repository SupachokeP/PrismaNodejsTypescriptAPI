class CustomError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    // Set the prototype explicitly to avoid issues with extending built-in objects
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export const createError = (status: number, message: string): CustomError => {
  return new CustomError(status, message);
};
