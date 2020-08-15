import { Component, OnInit } from '@angular/core';
import {AvengersService} from "./service/avengers.service";
import {Avengers} from "./avengers";

@Component({
  selector: 'app-avengers',
  templateUrl: './avengers.component.html',
  styleUrls: ['./avengers.component.css']
})
export class AvengersComponent implements OnInit {

   avengers: Array<Avengers>

  constructor(private avengersService:AvengersService) { }

  ngOnInit(): void {
  this.avengersService.get().subscribe((data) => {
    this.avengers = Avengers.parse(data)
  })

  }

}
