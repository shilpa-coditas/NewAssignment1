import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  loginData:any[]=[];
  constructor(private formBuilder: FormBuilder,private router:Router,private signupServ:SignupService) {
    this.loginData=JSON.parse(this.signupServ.getDetails());
   }

  ngOnInit() {
    this.initFroms();
  }
  signin(){
   
  }
  initFroms(){
    this.signinForm = this.formBuilder.group({
    
      email:['',Validators.compose([Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      password:['',Validators.compose([Validators.required])]
    });
  }



  onSignin(){
    let email=this.signinForm.value.email;
    let psw= this.signinForm.value.password;
    console.log(email+"sdddddd"+psw);
    for(let i=0;i<this.loginData.length;i++){
      if(email === this.loginData[i].email && psw === this.loginData[i].password){
        console.log(email);
        this.router.navigate(['authorization/addUser']);
      }
    }
  }

    
}

 