import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor() { }
  saveDetails(signUpForm){
    localStorage.setItem('person',signUpForm);
    console.log(signUpForm);
    

  }
  getDetails(){
    return localStorage.getItem('person');
  }
}
