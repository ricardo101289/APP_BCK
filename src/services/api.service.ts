import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  BASE_URL = "https://dev.tuten.cl:443/TutenREST/rest/user/";
  constructor(public http: Http) {}
  app = "APP_BCK";
  login(email, password) {
    var promise = new Promise((resolve, reject) => {
      let headers = new Headers({ Accept: "application/json" });
      headers.append("password", password);
      headers.append("app", "APP_BCK");
      this.http
        .put(
          this.BASE_URL + email,
          {},
          new RequestOptions({
            headers: headers
          })
        )
        .toPromise()
        .then(
          res => {
            resolve(res.json());
          },
          msg => {
            reject(`Error: ${msg.status} ${msg.statusText}`);
          }
        );
    });
    return promise;
  }

  profile(){
    var promise = new Promise((resolve, reject) => {
      let headers = new Headers({ Accept: "application/json" });
      headers.append("adminemail", localStorage.getItem("email"));
      headers.append("token", 'testapis@tuten.cl8odun8r0ljhlm7ak3m3bfja7cu');
      headers.append("app", "APP_BCK");
      let options = new RequestOptions({ headers: headers })
      // https://dev.tuten.cl/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true
      let url = this.BASE_URL+"contacto@tuten.cl/bookings?current=true"
      this.http
        .get(
          url,
          new RequestOptions({
            headers: headers
          })
        )
        .toPromise()
        .then(
          res => {
            resolve(res.json());
          },
          msg => {
            reject(msg);
          }
        );
    });
    return promise;
  }


}

// testapis@tuten.clhi8ss6rpfimpjfp1lrbbfsp5dm
// testapis@tuten.cl