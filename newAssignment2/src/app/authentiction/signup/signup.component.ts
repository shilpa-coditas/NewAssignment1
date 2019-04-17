import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  userArray:any[]=[];;
  // firstName: FormControl;
	// lastName: FormControl;
	// email: FormControl;
	// password: FormControl;
  
  constructor(private formBuilder: FormBuilder,private signupServ:SignupService,private router:Router) { 
    this.userArray=JSON.parse(this.signupServ.getDetails());
  }

  ngOnInit() {
    
    this.initFroms();
  }
  initFroms(){
    this.signUpForm = this.formBuilder.group({
      
      firstName:['',Validators.compose([Validators.required])],
      lastName:['',Validators.compose([Validators.required])],
      email:['',Validators.compose([Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      password:['',Validators.compose([Validators.required])]
    });
  }
  onSubmit(){

    let parray2 =[];
  let user = this.signUpForm.value;
  console.log("user"+user);
    if(!Array.isArray(this.userArray)){
      parray2.push(user);
    }else{
      parray2=this.userArray;
      parray2.push(user);
    }
    console.log("singup data",parray2);
    this.signupServ.saveDetails(JSON.stringify(parray2));
    this.router.navigate(['authorization/home']);

  }
  

  
}
