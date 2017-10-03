/**
 * @Author: Khalid Elshafie <khalid>
 * @Date:   2017-10-04T06:38:50+09:00
 * @Email:  Khalid@abolkog.com
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private _http:Http) { }

  createAccount(user) {
    return this._http.post('users/register', user)
      .map(resp => resp.json());
  }
}
