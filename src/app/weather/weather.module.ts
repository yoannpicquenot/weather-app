import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConvertPipe } from '../convert.pipe';

import {
  MatCardModule,
  MatDividerModule,
  MatGridListModule,
} from '@angular/material';

import { WeatherComponent } from './weather.component';

@NgModule({
  declarations: [
    WeatherComponent,
    ConvertPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule
  ]
})
export class WeatherModule { }
