import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { WeatherComponent } from './weather/weather.component';
import { CitiesComponent } from './cities/cities.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'cities'
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'cities',
  component: CitiesComponent,
}, {
  path: '**',
  redirectTo: 'cities',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
