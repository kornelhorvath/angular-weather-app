import { Component, OnInit } from '@angular/core';
import { Pipe } from '@angular/core';

import { Weather } from '../weather';
import { CURRENT } from '../mock-current-weather';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  weatherData = CURRENT;

  constructor() { }

  ngOnInit(): void {
    //console.log(CURRENT);
  }

}
