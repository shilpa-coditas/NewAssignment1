import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  // firstName: FormControl;
	// lastName: FormControl;
	// email: FormControl;
	// password: FormControl;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    
    this.initFroms();
  }
  initFroms(){
    this.signUpForm = this.formBuilder.group({
      
      firstName:['',Validators.compose([Validators.required])],
      lastName:['',Validators.compose([Validators.required])],
      email:['',Validators.compose([Validators.required])],
      password:['',Validators.compose([Validators.required])]
    });
  }

  
}
