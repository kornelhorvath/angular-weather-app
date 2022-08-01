import { Component, OnInit } from '@angular/core';
import { CITIES } from '../mock-cities';
import { City } from '../city';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  cities: City[] = CITIES;
  selectedCity: number = 1;
  cityObj: City = this.cities[0];
  // = this.cities.find(c => c.id == this.selectedCity) as City



  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  assignCityById(): void{
    console.log(`Searching for city on index: ${this.selectedCity}`);
    console.log(typeof(this.selectedCity));
    let obj = this.cities.find(c => c.id == this.selectedCity);
    this.cityObj = obj as City;
    console.log(this.cityObj);
    console.log(this.cities);
  }


}