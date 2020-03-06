import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes} from "@angular/router";
import { AvengersComponent } from './avengers/avengers.component';
import {AvengersService} from "./avengers/service/avengers.service";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'avengers',component:AvengersComponent},
  ]
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AvengersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AvengersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
