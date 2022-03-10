import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'


import { Validators, FormControl, FormGroup }  from '@angular/forms'
import { Router } from '@angular/router';

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




  
  constructor(private router: Router,public datepipe: DatePipe) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.registrationForm.value);
    // this.router.navigateByUrl('/dashboard')
    if(localStorage.getItem('startTime') == null){
      localStorage.setItem('startTime',JSON.stringify(new Date()))
    }

    if(localStorage.getItem('startTime') != null){
    this.router.navigateByUrl('/dashboard')
  }

    // console.log(localStorage.getItem('startTime'));
    
    // const d = new Date("Thu Mar 10 2022 00:45:36 GMT+0530 (India Standard Time)")
    // // console.log(d);
    // let endTime = new Date(d.getTime() + 15*60000)
    // let currentDate:any = new Date();
  
    // let cDateMillisecs =  currentDate.getTime();
    // let eDateMillisecs = endTime.getTime()
    // // console.log(cDateMillisecs);

    // let difference = eDateMillisecs - cDateMillisecs;

    // let seconds = Math.floor(difference / 1000);

    // let minutes = Math.floor(seconds / 60);
    // console.log(minutes,":",seconds%60);
    
    // console.log(Math.floor(cDateMillisecs - aMS))
    // let hours = Math.floor(minutes / 60);
    // let days = Math.floor(hours / 24);

    // console.log(new Date(currentDate.getTime() + 15*60000));
    // console.log(currentDate.getMonth());
    // console.log(currentDate);


    
    
  }

}
