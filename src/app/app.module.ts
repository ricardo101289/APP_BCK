import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ApiService} from '../services/api.service'
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { RouteRoutingModule } from '../route/route-routing.module';
import { ClientProfileComponent } from './client-profile/client-profile.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouteRoutingModule
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
