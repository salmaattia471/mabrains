import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotARobotComponent } from './not-a-robot/not-a-robot.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import{HttpClientModule}from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotARobotComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
