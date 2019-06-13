import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
export class WeatherComponent implements OnInit {

  @Input() private city = null;
  private imageUrl: string;

  private currentWeather: object;
  private JSON = JSON;

  constructor(
    private weatherService: WeatherService,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  ngOnChanges({ city: { currentValue } }) {
    return this.weatherService
      .getCityWeather(currentValue)
      .subscribe(response => this.currentWeather = response);
  }

  selectCity(city: string) {
  }
}
