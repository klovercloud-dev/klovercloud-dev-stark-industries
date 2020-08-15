import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Settings} from "../../common/settings";
import {Observable} from "rxjs";
import {Avengers} from "../avengers";

@Injectable()
export class AvengersService {
  resource="avengers"
  constructor(private http:HttpClient) { }

  get() {
    return this.http.get(Settings.BASE_URL+this.resource)
  }

  post(data:FormData){
    return this.http.post(Settings.BASE_URL+this.resource,data,{headers:null, responseType: 'text'})
  }

}
