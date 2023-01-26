import { HttpRequestInterceptor } from './http-request.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const httpProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];
