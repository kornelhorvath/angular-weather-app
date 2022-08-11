import { Component, OnInit, Input } from '@angular/core';
import { Forecastday } from '../weather';

@Component({
  selector: 'app-weekly-list-item',
  templateUrl: './weekly-list-item.component.html',
  styleUrls: ['./weekly-list-item.component.css']
})
export class WeeklyListItemComponent implements OnInit {

  @Input() forecast!: Forecastday;

  constructor() { }

  ngOnInit(): void {
  }

}
