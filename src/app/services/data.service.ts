import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
// var admin = require('firebase-admin');  
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiData:any
  startTime:any = 0
  constructor(private router:Router, public angularFireStore: AngularFirestore ) {
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
     if(localStorage?.getItem('startTime') != null){
      this.startTime = JSON?.parse(localStorage?.getItem('startTime') || '')
     }     
     return this.startTime;
   }

  //  getQuestionNumberFromLocal

   addUserDataToLocalStorage(val:any){
     console.log(val);
     
    localStorage.setItem('userData',JSON.stringify(val))
   }

   getUserDataFromLocalStorage(){     
    return JSON?.parse(localStorage?.getItem('userData') || '')
   }

   deleteStartTime(){
     this.router.navigateByUrl('result')
    localStorage.removeItem('startTime');
   }

   getStudentDoc(id:any){
     return this.angularFireStore.collection('student-collection').doc(id).valueChanges()
   }

   getStudentList(){
    return this.angularFireStore.collection('student-collection').snapshotChanges()
    // return this.angularFireStore.collection('student-collection').get()
  }

  getQuestionList(): Observable<any>{
    return this.angularFireStore.collection('student-collection').doc('exam_questions').get()
    // return this.angularFireStore.collection('student-collection').doc('exam_questions').snapshotChanges()
    // return this.angularFireStore.collection('student-collection').get()
  }

  getAnswerList(): Observable<any>{
    return this.angularFireStore.collection('student-collection').doc('answers').get()
    // return this.angularFireStore.collection('student-collection').doc('exam_questions').snapshotChanges()
    // return this.angularFireStore.collection('student-collection').get()
  }

  getUsersList(): Observable<any>{
    return this.angularFireStore.collection('student-collection').doc('users').get()
    // return this.angularFireStore.collection('student-collection').doc('exam_questions').snapshotChanges()
    // return this.angularFireStore.collection('student-collection').get()
  }

  createExam(data:any){
    return new Promise<any>((resolve,reject) =>{
       this.angularFireStore.collection('student-collection').doc('answers').set(data)
          .then(response => {console.log(response)}
                ,error => reject(error))
    })
  }

  createStudent(data:any){
    return new Promise<any>((resolve,reject) =>{
       this.angularFireStore.collection('student-collection').doc('userData').set(data)
          .then(response => {console.log(response)}
                ,error => reject(error))
    })
  }
  
  deleteStudent(data:any){
    return this.angularFireStore.collection('student-collection').doc(data.id).delete()
  }

  updateStudent(data:any,id:any){
    return this.angularFireStore.collection('student-collection').doc(id).update({
      name: data.name,
      email: data.email,
      fees: data.fees
    })
  }

  pushUserDataToFirestore(val:any){
   return new Promise<any>((resolve,reject) =>{
    this.angularFireStore.collection('student-collection').doc('users').set(val)
       .then(response => {console.log(response)
        localStorage.clear()
      }
             ,error => reject(error))
 })
  }

}
