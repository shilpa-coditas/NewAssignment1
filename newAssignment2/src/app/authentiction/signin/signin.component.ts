import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.initFroms();
  }
  signin(){
    this.router.navigate(['authorization/addUser']);
  }
  initFroms(){
    this.signinForm = this.formBuilder.group({
    
      email:['',Validators.compose([Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      password:['',Validators.compose([Validators.required])]
    });
  }
  onlogin(){
  //   let uname= this.loginData.value.userName;
  //   let psw=this.loginData.value.password;
  //  // console.log(this.userData[0].userName)
  //   for(let i=0;i<this.userData.length;i++){
  
  //     //console.log(this.userData[i].userName);
  //    if(uname === this.userData[i].userName && psw === this.userData[i].password){
  //     console.log(this.userData[i].userName);
  //       this.router.navigate(['/home']);
        
     }
    }
    
}

 