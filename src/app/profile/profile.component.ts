import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  private user: object;
  constructor(private userService: UserService, private router: Router) {
    this.user = this.userService.user;
  }

  ngOnInit() {
  }

  signout() {
    this.userService.signout();
    this.router.navigateByUrl('login');
  }
}
