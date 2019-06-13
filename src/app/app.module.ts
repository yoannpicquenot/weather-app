import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { WeatherModule } from './weather/weather.module';
import { CitiesModule } from './cities/cities.module';
import { ProfileModule } from './profile/profile.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    WeatherModule,
    CitiesModule,
    ProfileModule
  ],
  exports: [],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
