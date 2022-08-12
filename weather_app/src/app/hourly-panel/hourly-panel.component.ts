import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Forecastday, Hour, List } from '../weather';

@Component({
  selector: 'app-hourly-panel',
  templateUrl: './hourly-panel.component.html',
  styleUrls: ['./hourly-panel.component.css']
})
export class HourlyPanelComponent implements OnInit {

  @Input() list?: Hour[];

  constructor() { }

  ngOnInit(): void {
  }

}
