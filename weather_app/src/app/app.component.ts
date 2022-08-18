import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { City } from './city';
import { TodayComponent } from './today/today.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private authService: AuthService, private router: Router) {  }

  title = 'weather_app';
}
