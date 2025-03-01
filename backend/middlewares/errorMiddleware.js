class errorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal server error";
  err.statusCode = err.statusCode || 500;

  if (err.code === 11000) {
    const statusCode = 400;
    const message = "Duplicate Field Value Entered";
    err = new ErrorHandler(message, statusCode);
  }

  if (err.name === "JsonWebTokenError") {
    const statusCode = 400;
    const message = "Json Web Token Is Invalid. Try Again.";
    err = new ErrorHandler(message, statusCode);
  }
  if (err.name === "TokenExpiredError") {
    const statusCode = 400;
    const message = "Json Web Token Is Expired. Try Again";
    err = new ErrorHandler(message, statusCode);
  }
  if (err.name === "CastError") {
    const statusCode = 400;
    const message = `Resource Not Found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, statusCode);
  }

  const errorMessage = err.errors
    ? Object.values(err.errors)
        .map((error) => error.message)
        .join(" ")
    : err.message;

  return res.status(err.statusCode).json({
    success: false,
    error: true,
    message: errorMessage,
  });
};

export default errorHandler;
