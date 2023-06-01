export const ThrowError = (next: Function, message: string, statusCode: number) => {
  const error = new HttpError(message, statusCode);
  return next(error);
}

class HttpError extends Error {
  constructor(public message: string, public statusCode: number) {
    super()
  }
}