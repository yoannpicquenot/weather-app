import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user;
  constructor(private dataService: DatabaseService, private cookie: CookieService) {
    const userInCookies = this.cookie.get('user');
    const userDescription = userInCookies ? JSON.parse(userInCookies) : null;

    if (userDescription) {
      this.authenticate(userDescription.login, userDescription.password);
    }
  }

  authenticate(login, password) {
    this.user = this.dataService.getUser(login, password);
    this.addUserToCookies();
    return this.user;
  }

  private addUserToCookies() {
    if (this.user) {
      this.cookie.set('user', JSON.stringify(this.user));
    }
  }
}
