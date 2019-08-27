import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../services/api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    public api : ApiService,
  ){
    if (localStorage.getItem('token_user') === null || localStorage.getItem('token_user') === undefined) {
      this.router.navigate(['/login']);
    }else{
      this.router.navigate(['/profile']);
    }
  }

}
