import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { LoginService } from '../../services/login.service';
import { User } from '../../models/user.model';
import { LoginUser } from '../../models/login.user.model';

@Component({
    selector: 'login',
    templateUrl: 'app/templates/login/login.html',
    styleUrls: ['app/styles/login.css']
})

export class LoginComponent implements  OnInit{

    errorMessage : string;
    login_user: LoginUser = { user: '', password: ''};
    
    constructor(private _loginService: LoginService, private _router : Router) { }
    
    ngOnInit(){
         this.login_user = new LoginUser();
    }

    validate(){
        this._loginService.validate(this.login_user)
            .subscribe(user => {
                if (user) {
                    this._router.navigate(['/users'])
                }
            }, error => { 
                this.errorMessage = error 
                setTimeout(() => this.errorMessage = '', 3000);
            });
    }

    keyup(event: any, isValid: boolean){
        if(event.key == 'Enter' && isValid){
            this.validate();
        }
    }
}