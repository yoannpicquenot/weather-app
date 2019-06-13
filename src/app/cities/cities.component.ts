import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.sass']
})
export class CitiesComponent implements OnInit {

  private cities = [];
  private selectedCity = null;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.cities = this.userService.user.listeVilleFavortie;
    this.selectCity(this.cities[0]);
  }

  selectCity(city: string) {
    this.selectedCity = city;
  }
}
