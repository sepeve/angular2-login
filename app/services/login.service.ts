import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { BaseService } from './base.service';
import { User } from '../models/user.model';
import { LoginUser } from '../models/login.user.model';

@Injectable()
export class LoginService extends BaseService {

    constructor(private http: Http) { super(); }
    
    validate(user: LoginUser): Observable<User> {
        let body = { User: user.user, Password: user.password };
        return this.http.post(`${this._baseUrl}/login`, body, this._options)
            .map(response => response.json())
            .catch(this.handleError);
    }
}