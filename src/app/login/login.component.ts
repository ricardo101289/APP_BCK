import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string;
  password : string;
  msgError : boolean = true;
  constructor(
    private api : ApiService,
    private router: Router,
  ){

  }
  ngOnInit() {
    if (localStorage.getItem('token_user') !== null ) {
      this.router.navigate(['/profile']);
    }
  }

  login(){
    if (this.email && this.password) {
    this.api.login(this.email, this.password).then(res =>{
      let response : any = res;
      localStorage.setItem('token_user', response.sessionTokenBck);
      localStorage.setItem('email', this.email);
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
