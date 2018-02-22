import { Component, OnInit } from '@angular/core';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {
  cars = [];

  constructor(private carsServices: CarsService) { }

  ngOnInit() {
    this.cars = this.carsServices.cars;
  }

}
