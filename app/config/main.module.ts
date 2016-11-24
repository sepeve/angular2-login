import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './main.routes';

import { MainComponent } from '../components/main.component';       
import { LoginComponent } from '../components/login/login.component';


import { LoginService } from '../services/login.service';

@NgModule({
    imports: [BrowserModule, HttpModule, routing, FormsModule ],
    declarations: [ MainComponent, LoginComponent ],
    bootstrap: [ MainComponent ],
    providers: [ LoginService ]
})

export class MainModule { }