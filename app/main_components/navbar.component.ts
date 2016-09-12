import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

import { AuthService } from "../shared/auth.service";

@Component({
  selector: 'my-navbar',
  templateUrl: 'app/main_components/navbar.component.html'
})

export class NavbarComponent implements OnInit {

  isActive1 = false;
  isActive2 = false;
  isActive3 = false;
  isActive4 = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {

  }

  changeActive() {
    console.log("change active");
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logout();
  }
}