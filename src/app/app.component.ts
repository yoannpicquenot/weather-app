import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  userIsConnected: boolean;

  constructor(private router: Router, private userService: UserService) {
    if (userService.user) {
      this.userIsConnected = true;
      const callbackUrl = location.pathname.replace('/', '');
      router.navigateByUrl(callbackUrl === 'login' ? 'cities' : callbackUrl);
    } else {
      this.userIsConnected = false;
      router.navigateByUrl('login');
    }

    this.userService.isConnected.subscribe(status => this.userIsConnected = status);
  }
}
