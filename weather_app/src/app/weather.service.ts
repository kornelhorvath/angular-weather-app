import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { City } from './city';
import { CITIES } from './mock-cities';
import { CurrentWeather, Weather } from './weather';

import * as myConfig from './config';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = myConfig.config.apiKey;
  private apiUrl = 'https://api.openweathermap.org/data/2.5';

  //cityObject sharing
  private cityObject: BehaviorSubject<City>;
  sharedCityObject: Observable<City>;
  cities: City[];

  constructor(private http: HttpClient) { 
    this.cityObject = new BehaviorSubject(CITIES[0]);
    this.sharedCityObject = this.cityObject.asObservable();
    this.cities = CITIES;
  }

  nextCityObject(cityObject: City){
    this.cityObject.next(cityObject);
  }

  getApiKey(): string {
    return this.apiKey;
  }

  getCurrentWeather(lat: number, lon: number, appid: string): Observable<CurrentWeather>{
    const url = `${this.apiUrl}/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=metric`;
    return this.http.get<CurrentWeather>(url).pipe(
      tap(_ => this.log(`fetched current weather on url: ${url}`))
    );
  }

  private log(message: string) {
    console.log(`${message}`);
  }

  getCities(): City[]{
    return this.cities;
  }
  getDefaultCity(): City {
    return this.cities[0];
  }
  getCityObject(): Observable<City>{
    return this.cityObject;
  }


}
