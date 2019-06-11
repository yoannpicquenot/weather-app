import { Component, NgModule } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private router: Router, private userService: UserService) {
    const user = userService.user;
    if (user) {
      const callbackUrl = location.pathname.replace('/', '');
      router.navigateByUrl(callbackUrl === 'login' ? 'weather' : callbackUrl);
    } else {
      router.navigateByUrl('login');
    }
  }
}
