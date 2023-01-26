export interface APIResponse<T = any[] | any> {
  payload?: {
    data?: T;
    pages?: number;
    page?: number;
    limit?: number;
    total?: number;
  };
  message?: string;

  type?: string;
  statusCode?: number;
  error?: any;
  errorType?: string;
}
