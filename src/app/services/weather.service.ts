import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl: string = "http://api.openweathermap.org/data/2.5/weather?appid=3d32e5ea54d83c5d53afbeab1e165307";

  constructor(private $http: HttpClient) {}

  getCityWeather(city: string) : Observable<Object> {
    return this.$http.get(`${this.apiUrl}&q=${city},fr`);
  }
}
