import { Component } from '@angular/core';
import {ApiService} from '../services/api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email : string;
  password : string;
  msgError : boolean = true;
  constructor(
    private api : ApiService
  ){

  }
  login(){
    if (this.email && this.password) {
      console.log('====================================');
    console.log(this.email, this.password);
    console.log('====================================');
    this.api.login(this.email, this.password).then(res =>{
      console.log('====================================');
      console.log(res);
      console.log('====================================');
      let response : any = res;
      localStorage.setItem('token_user', response.sessionTokenBck);
    }).catch(err =>{
      console.log('====================================');
      console.log(err);
      console.log('====================================');
    })

    } else {
      this.msgError = false;
    }
  }
}
