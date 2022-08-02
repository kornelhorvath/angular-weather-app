import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { City } from './city';
import { CITIES } from './mock-cities';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  getCities(): Observable<City[]>{
    const cities = of(CITIES)
    return cities;
  }

}
