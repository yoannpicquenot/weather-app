import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DatabaseService } from './database.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user;
  public isConnected: BehaviorSubject<boolean>;
  constructor(private dataService: DatabaseService, private cookie: CookieService) {
    this.isConnected = new BehaviorSubject(false);
    const userInCookies = this.cookie.get('user');
    const userDescription = userInCookies ? JSON.parse(userInCookies) : null;

    if (userDescription) {
      this.authenticate(userDescription.login, userDescription.password);
    }
  }

  authenticate(login, password) {
    this.user = this.dataService.getUser(login, password);
    if (!this.user) {
      return;
    }
    this.addUserToCookies(login, password);
    this.isConnected.next(true);
    return this.user;
  }

  signout() {
    this.removeUserFromCookies();
    this.isConnected.next(false);
    this.user = null;
  }

  private addUserToCookies(login, password) {
    this.cookie.set('user', JSON.stringify(this.dataService.getUser(login, password)));
  }

  private removeUserFromCookies() {
    this.cookie.delete('user');
  }
}
