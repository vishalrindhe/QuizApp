import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  minute:any
  seconds:any
  startTime:any

  constructor(private data: DataService,private router:Router) { }

  ngOnInit(): void {
    // this.startTime = JSON.parse(localStorage.getItem('startTime') || '')
    this.timer()
  }

  timer(){
    const d = new Date(this.data.getStartTime())
    // console.log(d);
    let endTime = new Date(d.getTime() + 15*60000)
    let currentDate:any = new Date();
  
    let cDateMillisecs =  currentDate.getTime();
    let eDateMillisecs = endTime.getTime()
    // console.log(cDateMillisecs);

    let difference = eDateMillisecs - cDateMillisecs;

    let seconds = Math.floor(difference / 1000);

    this.minute = Math.floor(seconds / 60);
    this.seconds = seconds%60
    // console.log(this.minute,":",seconds%60);
    if((this.seconds == 0 && this.minute == 0) || (this.seconds < 0 && this.minute < 0)){
      alert('end')
      this.data.deleteStartTime()

    } else if(this.seconds != 0 || this.minute != 0){
      setInterval(() => {
        this.timer();
      }, 1000);
    }

   }

}
