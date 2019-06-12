import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { WeatherModule } from './weather/weather.module';

import { AppComponent } from './app.component';
import { ProgressPipe } from './progress.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProgressPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    WeatherModule,
  ],
  exports: [],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
