import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'


import { Validators, FormControl, FormGroup }  from '@angular/forms'
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';

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




  
  constructor(private router: Router,public datepipe: DatePipe, private data: DataService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.registrationForm.value);
    this.data.addUserDataToLocalStorage(this.registrationForm.value)
    let questions = {
      
       1:{
        option1: "c",
        option2: "z",
        option3: "b",
        option4: "d",
        question: "what comes after A?"
       },
       2:{
        option1: "0",
        option2: "-1",
        option3: "-2",
        option4: "2",
        question: "1+1 =?" 
       },
       3:{
        option1: "#000000",
        option2: "#ffffff",
        option3: "#111111",
        option4: "#222222",
        question: "hex code for black color?" 
       },
       4:{
        option1: "package",
        option2: "template",
        option3: "framework",
        option4: "module",
        question: "what is angular?" 
       },
       5:{
        option1: "c",
        option2: "z",
        option3: "b",
        option4: "d",
        question: "last letter of the english alphabet?" 
       },
       6:{
        option1: "c",
        option2: "z",
        option3: "b",
        option4: "d",
        question: "what comes before A?" 
       },
       7:{
        option1: "1",
        option2: "2",
        option3: "3",
        option4: "4",
        question: "1 + 0 = ?" 
       },
       8:{
        option1: "4",
        option2: "5",
        option3: "6",
        option4: "7",
        question: "2 + 3 = ?" 
       },
       9:{
        option1: "c",
        option2: "z",
        option3: "b",
        option4: "d",
        question: "what comes after A?"
       },
       10:{
        option1: "0",
        option2: "-1",
        option3: "-2",
        option4: "2",
        question: "1+1 =?" 
       },
       11:{
        option1: "#000000",
        option2: "#ffffff",
        option3: "#111111",
        option4: "#222222",
        question: "hex code for black color?" 
       },
       12:{
        option1: "package",
        option2: "template",
        option3: "framework",
        option4: "module",
        question: "what is angular?" 
       },
       13:{
        option1: "c",
        option2: "z",
        option3: "b",
        option4: "d",
        question: "last letter of the english alphabet?" 
       },
       14:{
        option1: "c",
        option2: "z",
        option3: "b",
        option4: "d",
        question: "what comes before A?" 
       },
       15:{
        option1: "1",
        option2: "2",
        option3: "3",
        option4: "4",
        question: "1 + 0 = ?" 
       }
      }

    let a = {
      "answers":[
      {"1":3},
      {"2":4},
      {"3":1},
      {"4":3},
      {"5":2},
      {"6":2},
      {"7":1},
      {"8":2},
      {"9":3},
      {"10":4},
      {"11":1},
      {"12":3},
      {"13":2},
      {"14":2},
      {"15":1}
      ]
  }

  let answers = {
    1:3,
    2:4,
    3:1,
    4:4,
    5:2,
    6:2,
    7:1,
    8:2,
    9:3,
    10:4,
    11:1,
    12:3,
    13:2,
    14:2,
    15:1
  }

  let u = {
    "1": 3,
    "2": 4,
    "3": 1,
    "4": 3,
    "5": 2,
    "firstName": "Vishal",
    "lastName": "Vishal",
    "email": "rindhevishal32@gmail.com",
    "occupation": "Systems analyst",
    "state": "Arunachal Pradesh",
    "gender": "male"
  }

    if(localStorage.getItem('startTime') == null){
      localStorage.setItem('startTime',JSON.stringify(new Date()))
    }

    if(localStorage.getItem('startTime') != null){
    this.router.navigateByUrl('/dashboard')
  }
    
  }

}
