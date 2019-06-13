import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatCardModule,
  MatDividerModule,
  MatGridListModule
} from '@angular/material';

import { CitiesComponent } from './cities.component';
import { WeatherModule } from '../weather/weather.module';

@NgModule({
  declarations: [CitiesComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    WeatherModule,
  ],
  exports: [
    WeatherModule
  ],
})
export class CitiesModule { }
