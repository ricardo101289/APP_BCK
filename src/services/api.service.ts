import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  BASE_URL = "https://dev.tuten.cl:443/TutenREST/rest/user/";
  constructor(public http: Http) {}

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

  saveToken
}
