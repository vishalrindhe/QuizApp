import { Component, OnInit } from '@angular/core';

import { Validators, FormControl, FormGroup }  from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  states = [
    {name: 'Choose Residence State'},
    {name: 'Andhra Pradesh'},
    {name: 'Arunachal Pradesh'},
    {name: 'Assam'},
    {name: 'Goa'},
    {name: 'Gujarat'},
    {name: 'Haryana'},
    {name: 'Karnataka'},
    {name: 'Kerala'},
    {name: 'Madhya Pradesh'},
    {name: 'Maharashtra'},
    {name: 'Punjab'},
    {name: 'Tamil Nadu'},
    {name: 'Telangana'},
    {name: 'Uttar Pradesh'}
  ];

  occupation = [
    {name: 'Choose Occupation Here'},
    {name: 'Network administrator'},
    {name: 'User experience designer'},
    {name: 'Systems analyst'},
    {name: 'Database administrator'},
    {name: 'Software application packager'},
    {name: 'Full-stack developer'},
    {name: 'Senior software engineer'},
    {name: 'Data scientist'},
    {name: 'Development operations engineer'},
    {name: 'Cloud engineer'},
    {name: 'IT security specialist'},
    {name: 'Analytics manager'},
    {name: 'Frontend developer'},
    {name: 'Backend Developer'}
  ];

  registrationForm = new FormGroup({
    firstName: new FormControl('',[ Validators.required, Validators.pattern('[a-zA-Z]+$'), Validators.minLength(2),Validators.maxLength(20)]),
    lastName: new FormControl('',[ Validators.required, Validators.pattern('[a-zA-Z]+$'), Validators.minLength(2),Validators.maxLength(20)]),
    email: new FormControl('',[ Validators.required, Validators.pattern('[^0-9]([a-zA-Z0-9+_.-])+[@]+[a-zA-Z0-9]+[.]+[a-z]{2,4}$')]),
    occupation: new FormControl(this.occupation[0].name,[ Validators.required]),
    state: new FormControl(this.states[0].name,[ Validators.required]),
    gender: new FormControl('',[ Validators.required])
  })




  
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.registrationForm.value);
    
  }

}
