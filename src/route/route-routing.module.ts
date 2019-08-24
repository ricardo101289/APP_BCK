import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../app/login/login.component'
import {ClientProfileComponent} from '../app/client-profile/client-profile.component'
const routes: Routes = [
  {path:'login',
  component: LoginComponent
  },
  {
    path:'profile',
    component: ClientProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
