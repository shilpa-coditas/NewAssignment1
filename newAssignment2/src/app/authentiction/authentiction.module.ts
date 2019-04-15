import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentictionRoutingModule } from './authentiction-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [SignupComponent, SigninComponent, HomeComponent],
  imports: [
    CommonModule,
    AuthentictionRoutingModule
  ]
})
export class AuthentictionModule { }
