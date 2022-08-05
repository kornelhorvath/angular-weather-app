import { Component, Input, OnInit } from '@angular/core';

import { City } from '../city';
import { CurrentWeather, Weather } from '../weather';
import { WeatherService } from '../weather.service';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  weatherData?: CurrentWeather;
  weatherDataSubscription?: Subscription;
  cityObj: City;
  cityObjectSubscription: Subscription;

  constructor(private weatherService: WeatherService) {
    this.cityObj = weatherService.getDefaultCity();
    this.cityObjectSubscription = this.weatherService.sharedCityObject.subscribe(data => {
      this.cityObj = data;
      //this.weatherDataSubscription = this.weatherService.getCurrentWeather(this.cityObj.lat, this.cityObj.lon, this.weatherService.getApiKey()).subscribe(weatherData => this.weatherData = weatherData);
    });
    console.log("today.component: Subscribed to cityObject");
  }

  ngOnInit(): void {
    console.log("Today component created");
  }

  ngOnDestroy() {
    this.cityObjectSubscription?.unsubscribe();
    this.weatherDataSubscription?.unsubscribe();
  }

}
