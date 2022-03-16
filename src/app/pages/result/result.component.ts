import { DataService } from 'src/app/services/data.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, AfterViewInit {
  answers:any
  userData:any
  score:number = 0
  userList:any

  constructor(private data: DataService) {
    alert("inside result")
   
   }
  ngAfterViewInit() {

  }

  ngOnInit() {
    this.userData = this.data.getUserDataFromLocalStorage()
    this.a();
    this.b();
 
    // this.getInitialData()
  }
  a(){
    this.data.getAnswerList().subscribe( (res:any) => {
      alert('answer')
      this.answers = res.data()
      console.log("answers:",this.answers);
    });
  }

  b(){
    this.data.getUsersList().subscribe(res =>{
      alert("inside user")
     this.userList= res.data()
     console.log("users:",this.userList);
     this.calculateScore()
   })

  }

  getInitialData(){
    alert("inside getinit")
    // this.userData = this.data.getUserDataFromLocalStorage()
    // this.data.getAnswerList().subscribe(res =>{
    //   alert("inside answer")

    //   console.log(res.data());
      
    //   this.answers = res.data()
    // })

    let x:any
   

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
      

      
      // this.data.pushUserDataToFirestore(this.userData)
  }



}
