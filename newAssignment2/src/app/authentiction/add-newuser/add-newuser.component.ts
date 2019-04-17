import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-newuser',
  templateUrl: './add-newuser.component.html',
  styleUrls: ['./add-newuser.component.css']
})
export class AddNewuserComponent implements OnInit {

  addUserForm: FormGroup;
  contry: any[] = [
    {value: 'USA', viewValue: 'USA'},
    {value: 'INDIA', viewValue: 'INDIA'},
    
  ];
  USA:any[]=[
    {value: '', viewValue: ''}];
  
  INDIA:any[]=[
    {value:'maharashtra',viewValue:'maharashtra'},
    {value:'MP',viewValue:'MP'},
  ];
  
  constructor(private formBuilder: FormBuilder,private router:Router) { }


  ngOnInit() {
    this.initFroms();
  }

  initFroms(){
    this.addUserForm = this.formBuilder.group({
      email:['',Validators.compose([Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      phone: ['',Validators.compose([Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')])],
     
      firstName:['',Validators.compose([Validators.required])],
      lastName:['',Validators.compose([Validators.required])]
    });
  }

}
