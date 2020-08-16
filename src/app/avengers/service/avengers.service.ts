import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class AvengersService {
  resource="avengers"
  constructor(private http:HttpClient) { }

  get() {
    return this.http.get(environment.base_url+this.resource)
  }

  post(data:FormData){
    return this.http.post(environment.base_url+this.resource,data,{headers:null, responseType: 'text'})
  }

}
