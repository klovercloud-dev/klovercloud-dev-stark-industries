import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes} from "@angular/router";
import { AvengersComponent } from './avengers/avengers.component';
import {AvengersService} from "./avengers/service/avengers.service";
import {HttpClientModule} from "@angular/common/http";
import { UploaderComponent } from './uploader/uploader.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const appRoutes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'avengers',component:AvengersComponent},
  {path:'upload',component:UploaderComponent},
  ]
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AvengersComponent,
    UploaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AvengersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
