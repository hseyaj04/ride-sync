class ApiError extends Error {
    constructor(
      statusCode, 
      message = "something went wrong", 
      errors = [0], 
      stack = ""
  ) {
      super(message);
      this.statusCode = statusCode;
      this.errors = errors;
      // this.stack = stack;
      this.data = null;
      this.success = false;
  
      if(stack){
          this.stack = stack;
      }
      else{
          Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  
module.exports = ApiError;