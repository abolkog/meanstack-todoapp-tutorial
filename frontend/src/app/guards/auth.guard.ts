/**
 * @Author: Khalid Elshafie <khalid>
 * @Date:   2017-10-06T23:31:30+09:00
 * @Email:  Khalid@abolkog.com
 */

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _userService: UserService,
    private _router :Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this._userService.isLoggedIn()) {
      return true;
    }

    this._router.navigate(['/login'], { queryParams: { returnUrl: state.url }} );
    return false;
  }
}
