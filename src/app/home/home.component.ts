import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../auth.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  registerform: FormGroup = new FormGroup({

    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.pattern(/^01[0125][0-9]{8}$/), Validators.required]),

    Subject: new FormControl('', [Validators.required])

  })

  constructor(private router: Router, private viewportScroller: ViewportScroller, private _AuthService: AuthService) { }



  // ngAfterViewInit() {
  //   this.router.events.pipe(
  //     filter(event => event instanceof NavigationEnd)
  //   ).subscribe(() => {
  //     const fragment = this.router.routerState.snapshot.root.fragment;
  //     if (fragment) {
  //       setTimeout(() => {
  //         this.viewportScroller.scrollToAnchor(fragment);
  //       });
  //     }
  //   });
  // }

  scrollToSection(fragment: string) {
    this.router.navigate([], { fragment }).then(() => {
      this.viewportScroller.scrollToAnchor(fragment);
    });
  }

  handleform() {
    this._AuthService.setregister(this.registerform.value).subscribe({
      next: (responce) => {

        console.log(responce);


      }

    })
  }
}