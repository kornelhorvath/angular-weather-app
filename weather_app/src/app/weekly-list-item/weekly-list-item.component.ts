import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Forecastday } from '../weather';

@Component({
  selector: 'app-weekly-list-item',
  templateUrl: './weekly-list-item.component.html',
  styleUrls: ['./weekly-list-item.component.css']
})
export class WeeklyListItemComponent implements OnInit {

  @Input() forecast!: Forecastday;
  @Output() listItemClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitClickedListItem(value: string) {
    this.listItemClicked.emit(value);
    console.log(`emitted: ${value}`);
  }

}
