import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  startTime:any
  constructor(private router:Router) {
    // setInterval(()=>{
    //   if(localStorage.getItem('startTime') != null){
    //     this.startTime = JSON.parse(localStorage.getItem('startTime') || '')
    //   }
    // },1000)
    // if(localStorage.getItem('startTime') != null){
    //   this.startTime = JSON.parse(localStorage.getItem('startTime') || '')
    // }
   }

   getStartTime(){
     this.startTime = JSON.parse(localStorage.getItem('startTime') || '')
     return this.startTime;
   }

   deleteStartTime(){
     this.router.navigateByUrl('result')
    localStorage.removeItem('startTime');
   }

  

}
