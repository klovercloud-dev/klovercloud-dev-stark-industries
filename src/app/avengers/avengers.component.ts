import { Component, OnInit } from '@angular/core';
import {AvengersService} from "./service/avengers.service";

@Component({
  selector: 'app-avengers',
  templateUrl: './avengers.component.html',
  styleUrls: ['./avengers.component.css']
})
export class AvengersComponent implements OnInit {

public avengers
  constructor(private avengersService:AvengersService) { }

  ngOnInit(): void {
  this.avengersService.getAvengers().subscribe((data) => {
    this.avengers = data
    console.log(data.valueOf())
  })
    console.log(this.avengers);

  }

}
