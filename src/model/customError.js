class CustomError extends Error {
  constructor(statusText, status, data) {
    super();

    Error.captureStackTrace(this, this.constructor);

    this.data = data || null;
    this.statusText = statusText || 'Something went wrong. Please try again.';
    this.status = status || 500;
  }
}

module.exports = CustomError;
