import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentictionRoutingModule } from './authentiction-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [SignupComponent, SigninComponent, HomeComponent],
  imports: [
    CommonModule,
    AuthentictionRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
    
  ],
  exports:[
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class AuthentictionModule { }
