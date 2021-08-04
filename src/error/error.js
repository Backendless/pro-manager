export class ApiError extends Error {
  constructor(message, httpStatusCode, code, details) {
    super(message)

    this.httpStatusCode = httpStatusCode

    this.code = code
    this.details = details || {}
  }

  toJSON() {
    return {
      message: this.message,
      code   : this.code,
      details: this.details,
    }
  }
}

ApiError.ISE = class InternalSystemError extends ApiError {
  constructor(message, code, details) {
    super(message, 500, code, details)
  }
}

ApiError.NotFoundError = class NotFoundError extends ApiError {
  constructor(message, code, details) {
    super(message, 404, code, details)
  }
}

ApiError.BadRequestError = class BadRequestError extends ApiError {
  constructor(message, code, details) {
    super(message, 400, code, details)
  }
}

ApiError.ValidationError = class ValidationError extends ApiError {
  constructor(message, code, details) {
    super(message, 400, code, details)
  }
}

ApiError.InvalidOperationError = class InvalidOperationError extends ApiError {
  constructor(message, code, details) {
    super(message, 400, code, details)
  }
}

ApiError.NotAuthorizedError = class NotAuthorizedError extends ApiError {
  constructor(message, code, details) {
    super(message, 401, code, details)
  }
}

ApiError.ForbiddenError = class NotAuthorizedError extends ApiError {
  constructor(message, code, details) {
    super(message, 403, code, details)
  }
}

ApiError.DuplicateEntryError = class DuplicateEntryError extends ApiError {
  constructor(message, code, details) {
    super(message, 409, code, details)
  }
}

ApiError.ResourceNotAvailableError = class ResourceNotAvailableError extends ApiError {
  constructor(message, code, details) {
    super(message, 410, code, details)
  }
}

ApiError.LockedError = class LockedError extends ApiError {
  constructor(message, code, details) {
    super(message, 423, code, details)
  }
}
