import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { WEEKLY } from '../mock-current-weather';
import { ForecastWeather } from '../weather';
import { WeatherService } from '../weather.service';
import { City } from '../city';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {
  
  readonly API_REQUEST_NUMBER_OF_DAYS: number = 7;
  weatherData?: ForecastWeather = WEEKLY;
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
    console.log("weekly.component: Subscribed to cityObject");
  }

  ngOnInit(): void {
    console.log("Weekly component created");
  }

  ngOnDestroy() {
    this.cityObjectSubscription?.unsubscribe();
    this.weatherDataSubscription?.unsubscribe();
  }

}













