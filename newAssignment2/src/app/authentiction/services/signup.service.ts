import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor() { }
  saveDetails(signUpForm){
    localStorage.setItem('person',signUpForm);
    //console.log(signUpForm);
    

  }
  getDetails(){
    return localStorage.getItem('person');
  }

  saveNewUSerDetails(addUserForm){
    localStorage.setItem('newUser',addUserForm);

  }

  getAllUsers(){
    return localStorage.getItem('newUser');
  }
}
