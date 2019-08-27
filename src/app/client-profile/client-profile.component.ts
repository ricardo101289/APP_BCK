import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service'
import { Router } from "@angular/router";
@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {
  profile : any;
  filterargs = {bookingId: 0};
  public searchText : string;

  constructor(
    private api : ApiService,
    private router: Router
  ) { 
    
  }

  ngOnInit() {
    this.getProfile();
  }

  getProfile(){
    this.api.profile().then(res=>{
      this.profile = res;
    }).catch(err=>{
      this.api.loading = false;
    })
  }

  closeSesion(){
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grdFilter'
})
export class GrdFilterPipe implements PipeTransform {
  transform(items: any, filter: any, defaultFilter: boolean): any {
    if (!filter){
      return items;
    }

    if (!Array.isArray(items)){
      return items;
    }

    if (filter && Array.isArray(items)) {
      let filterKeys = Object.keys(filter);

      if (defaultFilter) {
        return items.filter(item =>
            filterKeys.reduce((x, keyName) =>
                (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "", true));
      }
      else {
        return items.filter(item => {
          return filterKeys.some((keyName) => {
            return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
          });
        });
      }
    }
  }
}
