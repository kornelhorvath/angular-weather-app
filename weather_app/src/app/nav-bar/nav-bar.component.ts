import { Component, OnInit } from '@angular/core';
import { CITIES } from '../mock-cities';
import { City } from '../city';
import { WeatherService } from '../weather.service';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  cities: City[] = [];
  cityObj?: City;
  citySub?: Subscription;

  constructor(private weatherService: WeatherService) {
    
  }

  ngOnInit(): void {
    /*this.weatherService.getCities()
      .subscribe(cities => this.cities = cities);*/
    this.citySub = this.weatherService.getCities().subscribe(cities => this.cities = cities);
    this.cityObj = this.cities[0];
  }

  ngOnDestroy() {
    this.citySub?.unsubscribe();
  }

}