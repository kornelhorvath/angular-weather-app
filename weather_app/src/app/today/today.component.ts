import { Component, Input, OnInit } from '@angular/core';

import { City } from '../city';
import { CurrentWeather, ForecastWeather, Hour, HourlyWeather, Rain, Weather } from '../weather';
import { WeatherService } from '../weather.service';
import { Observable, Subscription, of } from 'rxjs';
import { CURRENT, HOURLY } from '../mock-current-weather';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  forecastData!: ForecastWeather;
  forecastDataSubscription?: Subscription;
  weatherData?: CurrentWeather;// = CURRENT;
  weatherDataSubscription?: Subscription;
  cityObj: City;
  cityObjectSubscription: Subscription;

  constructor(private ws: WeatherService) {
    this.cityObj = ws.getDefaultCity();
    this.cityObjectSubscription = this.ws.sharedCityObject.subscribe(data => {
      this.cityObj = data;
      this.weatherDataSubscription = this.ws.apiRequest<CurrentWeather>(
        `${this.ws.getApiUrl()}/weather?lat=${this.cityObj.lat}&lon=${this.cityObj.lon}&appid=${this.ws.getApiKey()}&units=metric`
        ).subscribe(data => this.weatherData = data);
      this.forecastDataSubscription = this.ws.apiRequest<ForecastWeather>(
        `https://api.weatherapi.com/v1/forecast.json?key=${this.ws.getWeeklyApiKey()}&q=${this.cityObj.lat},${this.cityObj.lon}`
      ).subscribe(data => this.forecastData = data);
    });
    console.log("today.component: Subscribed to cityObject");
  }

  ngOnInit(): void {
    console.log("Today component created");
  }

  ngOnDestroy() {
    this.cityObjectSubscription?.unsubscribe();
    this.weatherDataSubscription?.unsubscribe();
    this.forecastDataSubscription?.unsubscribe();
  }

}
