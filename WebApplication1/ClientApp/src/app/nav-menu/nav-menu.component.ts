import { Component } from '@angular/core';
import { AuthenticationService } from '../_services/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  model: any = {};
  checkLoggedIn: boolean = false;

  constructor(public authService: AuthenticationService) { }

  collapse() {
    this.isExpanded = false;
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in successfully!');
    }, error => {
      console.log('Failed to log in!');
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
