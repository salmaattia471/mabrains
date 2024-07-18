import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router, private viewportScroller: ViewportScroller,private _AuthService:AuthService) { }
  scrollToSection(fragment: string) {
    this.router.navigate([], { fragment }).then(() => {
      this.viewportScroller.scrollToAnchor(fragment);
    });
  }
}
