import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from 'src/app/services/data.service';

declare var $: any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  minute:any
  seconds:any
  startTime:any
  questionsData:any
  questionNumber:number= 1
  userData:any
  interval:any


  constructor(private data: DataService,private router:Router,private spinner: NgxSpinnerService) { }
  ngOnDestroy() {
    console.log("destroyed called:",this.interval);
    clearInterval(this.interval)

  }

  ngOnInit(): void {
    this.spinner.show()
    if(localStorage.getItem('questionNumber') == null){
      localStorage.setItem('questionNumber',JSON.stringify(this.questionNumber))
    } else{
      this.questionNumber = JSON.parse(localStorage.getItem('questionNumber') || '')
    }
    this.userData = this.data.getUserDataFromLocalStorage()
    console.log(this.userData);
    this.timer()
    
    this.data.getQuestionList().subscribe(res =>{
      this.questionsData = res.data()
      console.log("questionData:",this.questionsData);
      this.spinner.hide()
    })

    this.a()
    this.b()
  }

  a(){
    this.data.getAnswerList().subscribe( res => {
      // alert('answer')
      this.data.answers = res.data()
      console.log("answers:",res.data());
      this.spinner.hide()
    });
  }

  b(){
    // this.spinner.show()
    this.data.getUsersList().subscribe(res =>{
      // alert("inside user")
     this.data.userList= res.data()
     console.log("users:",res.data());
     this.spinner.hide()
    //  this.calculateScore()
   })
  }

  addItem(newItem: number) {
    this.questionNumber = newItem
    localStorage.setItem('questionNumber',JSON.stringify(this.questionNumber))
    this.userData = this.data.getUserDataFromLocalStorage()

  }

  timer(){
    const d = new Date(this.data.getStartTime())
    if(d != null || d != undefined || d != ''){
      let endTime = new Date(d.getTime() + 15*60000)
      let currentDate:any = new Date();
    
      let cDateMillisecs =  currentDate.getTime();
      let eDateMillisecs = endTime.getTime()
  
      let difference = eDateMillisecs - cDateMillisecs;
  
      let seconds = Math.floor(difference / 1000);
  
      this.minute = Math.floor(seconds / 60);
      this.seconds = seconds%60
      if((this.seconds == 0 && this.minute == 0) || (this.seconds < 0 && this.minute < 0)){
        // this.a()
        // this.b()

      //   this.data.getAnswerList().subscribe( res => {
      //     // alert('answer')
      //     this.data.answers = res.data()
      //     console.log("answers:",res.data());
      //     this.spinner.hide()

      //   });
      //   this.data.getUsersList().subscribe(res =>{
      //     // alert("inside user")
      //    this.data.userList= res.data()
      //    console.log("users:",res.data());
      //    this.spinner.hide()
      //   //  this.calculateScore()
      //   this.data.deleteStartTime()

      //  })
        



        // $("#submitButton").click()

        // localStorage.removeItem('startTime');
        // this.router.navigateByUrl('/result')
        this.data.deleteStartTime()
  
      } else if(this.seconds != 0 || this.minute != 0){
        this.interval = setInterval(() => {
                        this.timer();
                      }, 1000);
      }
  
    }
   
   }

}
