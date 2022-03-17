import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
import { NgxSpinnerService } from 'ngx-spinner';
// import * as $ from 'jquery';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  answers:any
  userData:any
  score:number = 0
  userList:any

  constructor(private data: DataService,private spinner: NgxSpinnerService) {
   }

  ngOnInit() {
    this.userData = this.data.getUserDataFromLocalStorage(),
    this.answers = this.data.answers
    this.userList = this.data.userList
    console.log(this.answers);
    console.log(this.userList);
    
    
    this.calculateScore()
    
    // alert("inside")
    // this.spinner.show()
    // this.userData = this.data.getUserDataFromLocalStorage()
    // this.a()
    // this.b()
  }
  a(){
    this.data.getAnswerList().subscribe( res => {
      // alert('answer')
      this.answers = res.data()
      console.log("answers:",this.answers);
      // this.spinner.hide()
    });
  }

  b(){
    // this.spinner.show()
    this.data.getUsersList().subscribe(res =>{
      // alert("inside user")
     this.userList= res.data()
     console.log("users:",this.userList);
     this.spinner.hide()
     this.calculateScore()
   })

  }

  calculateScore(){
    let keys = Object.keys(this.answers)
    console.log(keys);
    console.log(this.userData);
    
      for (const iterator of keys) {
        console.log(iterator);
        
        if(this.userData[iterator] == this.answers[iterator] ) {
          this.score++
        }
      }
      this.userData.score = this.score
      this.userList.users.push(this.userData)
      console.log("usrListafterpush:",this.userList);
      
      this.data.pushUserDataToFirestore(this.userList)
  }



}
