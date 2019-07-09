import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../app/views/login/login.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  public dataUser: any;
  constructor(private loginService: LoginService) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.loginService.getdataUser() !== null) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + atob(atob(atob(this.loginService.getdataUser().access_token)))
        }
      });
    }
    return next.handle(request);
  }
}
