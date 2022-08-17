import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { WeatherService } from '../weather.service';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  cities: City[];
  cityObj: City;
  cityObjectSubscription: Subscription;

  /**/
  myControl = new FormControl('');
  filteredOptions: Observable<City[]>;

  constructor(private weatherService: WeatherService) {
    this.cityObj = weatherService.getDefaultCity();
    this.cities = this.weatherService.getCities();
    this.cityObjectSubscription = this.weatherService.sharedCityObject.subscribe(data => this.cityObj = data);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(city => (city ? this._filter(city) : this.cities.slice()))
    );
  }

  ngOnInit(): void {
    console.log("Nav-bar component created");
  }

  ngOnDestroy() {
    this.cityObjectSubscription?.unsubscribe();
  }

  onCityObjectChange(): void {
    //console.log(`Next city fired:`); console.log(this.cityObj);
    if((typeof(this.cityObj) === 'object'))
      this.weatherService.nextCityObject(this.cityObj);
  }

  private _filter(value: string | City): City[] {
    console.log(value);
    const filterValue = (typeof(value) === 'object') ? value.name.toLowerCase() : value.toLowerCase();
    return this.cities.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  getOptionText(option: City): string {
    return `${option.name}, ${option.code}`;
  }

}