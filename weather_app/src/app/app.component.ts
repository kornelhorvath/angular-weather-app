import { Component } from '@angular/core';
import { City } from './city';
import { TodayComponent } from './today/today.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'weather_app';
}
