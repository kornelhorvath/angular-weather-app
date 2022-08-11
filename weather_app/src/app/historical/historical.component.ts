import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { City } from '../city';
import { ForecastWeather } from '../weather';
import { WeatherService } from '../weather.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {

  readonly MINUS_YEAR = 10;
  cityObj: City;
  cityObjectSubscription?: Subscription;
  historyWeather?: ForecastWeather;
  historyWeatherSubscription?: Subscription;

  constructor(private ws: WeatherService, private datepipe: DatePipe) {
    this.cityObj = ws.getDefaultCity();
  }

  ngOnInit(): void {
    console.log("Historical component created");
    this.cityObjectSubscription = this.ws.sharedCityObject.subscribe(data => {
      this.cityObj = data;
      let date = new Date();
      date.setFullYear(date.getFullYear() - this.MINUS_YEAR);
      this.historyWeatherSubscription = this.ws.apiRequest<ForecastWeather>(
        `${this.ws.getWeeklyApiUrl()}/history.json?key=${this.ws.getWeeklyApiKey()}&q=${this.cityObj.lat},${this.cityObj.lon}&dt=${this.datepipe.transform(date, 'yyyy-MM-dd')}`
      ).subscribe(data => this.historyWeather = data);
    });

    /*let date: Date = new Date();  console.log(date);
    date.setFullYear(date.getFullYear() - 10); console.log(date);*/
  }

}
