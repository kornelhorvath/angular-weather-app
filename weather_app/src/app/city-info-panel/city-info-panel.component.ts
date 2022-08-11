import { Component, OnInit, Input } from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'app-city-info-panel',
  templateUrl: './city-info-panel.component.html',
  styleUrls: ['./city-info-panel.component.css']
})
export class CityInfoPanelComponent implements OnInit {

  @Input() city!: City;

  constructor() { }

  ngOnInit(): void {
  }

}
