import { JwtService } from 'src/app/core/authentication/jwt.service';
import { GlobalService } from './../global/global.service';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private global: GlobalService, private jwt: JwtService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.global.setLoading(true);
    const token = this.jwt.accessToken;
    const req = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + token),
    });
    return next.handle(req).pipe(
      finalize(() => {
        setTimeout(() => {
          this.global.setLoading(false);
        }, 750);
      })
    );
  }
}
