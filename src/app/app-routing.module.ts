import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'login'
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'weather',
  component: WeatherComponent,
}, {
    path: '**',
    redirectTo: 'weather',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
