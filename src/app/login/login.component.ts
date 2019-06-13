import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  errors: Array<string> = [];
  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const { login, password } = form.value;
      this.errors = [];
      if (this.userService.authenticate(login, password)) {
        this.router.navigateByUrl('weather');
      } else {
        this.errors.push('Unknown user, check your credentials');
      }
    }
  }
}
