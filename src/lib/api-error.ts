import HTTP_CODES from "../constants/http-codes";

class ApiError extends Error{
  public httpCode: HTTP_CODES;

  constructor(httpCode:HTTP_CODES, message:string){
    super(message);
    this.httpCode = httpCode;
  }
}

export default ApiError;