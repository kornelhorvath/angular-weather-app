import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { WeatherService } from '../weather.service';
import { Observable, of, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  cities: City[];
  cityObj: City;
  cityObjectSubscription: Subscription;
  
  constructor(private weatherService: WeatherService) {
    this.cityObj = weatherService.getDefaultCity();
    this.cities = this.weatherService.getCities();
    this.cityObjectSubscription = this.weatherService.sharedCityObject.subscribe(data => this.cityObj = data);
  }

  ngOnInit(): void {
    console.log("Nav-bar component created");
  }

  ngOnDestroy() {
    this.cityObjectSubscription?.unsubscribe();
  }

  onCityObjectChange(){
    //console.log(`Next city fired:`); console.log(this.cityObj);
    this.weatherService.nextCityObject(this.cityObj);
  }

}