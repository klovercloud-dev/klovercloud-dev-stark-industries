import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Settings} from "../../common/settings";

@Injectable()
export class AvengersService {
  resource="avengers"
  constructor(private http:HttpClient) { }

  getAvengers(){
    return this.http.get(Settings.BASE_URL+this.resource)
  }
}
