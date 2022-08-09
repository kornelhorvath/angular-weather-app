import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { MONTHLY, WEEKLY } from '../mock-current-weather';
import { ForecastWeather } from '../weather';
import { WeatherService } from '../weather.service';
import { City } from '../city';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css']
})
export class MonthlyComponent implements OnInit {

  readonly API_REQUEST_NUMBER_OF_DAYS: number = 30;
  weatherData?: ForecastWeather = MONTHLY;
  weatherDataSubscription?: Subscription;
  cityObj: City;
  cityObjectSubscription: Subscription;

  constructor(private ws: WeatherService) {
    this.cityObj = ws.getDefaultCity();
    this.cityObjectSubscription = this.ws.sharedCityObject.subscribe(data => {
      this.cityObj = data;
      /*this.weatherDataSubscription = this.ws.apiRequest<ForecastWeather>(
        `${ws.getWeeklyApiUrl()}/forecast.json?key=${ws.getWeeklyApiKey()}&q=${this.cityObj.lat},${this.cityObj.lon}&days=${this.API_REQUEST_NUMBER_OF_DAYS}`
      ).subscribe(data => this.weatherData = data);*/
    });
    console.log("monthly.component: Subscribed to cityObject");
  }

  ngOnInit(): void {
    console.log("Monthly component created");
  }

  ngOnDestroy() {
    this.cityObjectSubscription?.unsubscribe();
    this.weatherDataSubscription?.unsubscribe();
  }

}
