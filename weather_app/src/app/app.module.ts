import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { TodayComponent } from './today/today.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { HistoricalComponent } from './historical/historical.component';
import { HttpClientModule } from '@angular/common/http';
import { GetByKeyPipe } from './get-by-key.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TodayComponent,
    WeeklyComponent,
    MonthlyComponent,
    HistoricalComponent,
    GetByKeyPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
