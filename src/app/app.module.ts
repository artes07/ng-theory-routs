import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {CarsService} from './cars.service';


@NgModule({
  declarations: [
    AppComponent,
    CarsPageComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
