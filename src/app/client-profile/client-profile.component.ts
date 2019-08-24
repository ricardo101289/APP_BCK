import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service'
@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {
  profile : any;
  constructor(
    private api : ApiService
  ) { 
    
  }

  ngOnInit() {
    this.getProfile();
  }

  getProfile(){
    console.log('====================================');
    console.log("consultando profile");
    console.log('====================================');
    this.api.profile().then(res=>{
      this.profile = res;
      console.log('====================================');
      console.log(this.profile);
      console.log('====================================');
    }).catch(err=>{
      console.log('====================================');
      console.log(err);
      console.log('====================================');
    })
  }

}
