import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import {AuthenticationService} from './services/authentication.service';
import {RouterService} from './services/router.service';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: RouterService) {}

  canActivate(){
    if(!this.authService.isTokenExpired()){
      return true;
    }
    else{
      this.router.routeToLogin();
      return false;
    }
  };
}
