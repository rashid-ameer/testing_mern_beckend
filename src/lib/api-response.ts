class ApiResponse {
  public data?: any;
  public message: string;
  public success: boolean;

  constructor(message: string,data?:any){
    this.message = message;
    this.success = true;
    this.data = data;
  }
}

export default ApiResponse;