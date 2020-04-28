import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { AuthService } from '../auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) { }
  intercept(req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem("JWT_TOKEN");

    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + idToken)
      });
      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }
  // intercept(req: HttpRequest<any>, next: HttpHandler) {
  //   // Get the auth token from the service.
  //   const authToken = this.auth.getAuthorizationToken();

  //   /*
  //   * The verbose way:
  //   // Clone the request and replace the original headers with
  //   // cloned headers, updated with the authorization.
  //   const authReq = req.clone({
  //     headers: req.headers.set('Authorization', authToken)
  //   });
  //   */
  //   // Clone the request and set the new header in one step.
  //   const authReq = req.clone({ setHeaders: { Authorization: authToken } });

  //   // send cloned request with header to the next handler.
  //   return next.handle(authReq);
  // }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/