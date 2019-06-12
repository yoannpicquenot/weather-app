import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
export class WeatherComponent implements OnInit {

  private cities = [];
  private selectedCity = null;
  private currentWeather = null;

  private JSON = JSON;

  constructor(
    private weatherService: WeatherService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.cities = this.userService.user.listeVilleFavortie;
    this.selectCity(this.cities[0]);
  }

  selectCity(city: string) {
    this.selectedCity = city;
    this.weatherService
      .getCityWeather(city)
      .subscribe(response => this.currentWeather = response);
  }
}
