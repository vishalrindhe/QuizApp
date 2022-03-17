import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiData:any
  startTime:any = 0
  answers:any
  userList:any
  constructor(private router:Router, public angularFireStore: AngularFirestore ) {
   }

   getStartTime(){
     if(localStorage?.getItem('startTime') != null){
      this.startTime = JSON?.parse(localStorage?.getItem('startTime') || '')
     }     
     return this.startTime;
   }

   addUserDataToLocalStorage(val:any){
     console.log(val);
     
    localStorage.setItem('userData',JSON.stringify(val))
   }

   getUserDataFromLocalStorage(){     
    return JSON?.parse(localStorage?.getItem('userData') || '')
   }

   deleteStartTime(){
    localStorage.removeItem('startTime');
    this.router.navigateByUrl('/result')
   }

   getStudentDoc(id:any){
     return this.angularFireStore.collection('student-collection').doc(id).valueChanges()
   }

   getStudentList(){
    return this.angularFireStore.collection('student-collection').snapshotChanges()
  }

  getQuestionList(): Observable<any>{
    return this.angularFireStore.collection('student-collection').doc('exam_questions').get()
    // return this.angularFireStore.collection('student-collection').doc('exam_questions').snapshotChanges()
    // return this.angularFireStore.collection('student-collection').get()
  }

  getAnswerList(): Observable<any>{
    return this.angularFireStore.collection('student-collection').doc('answers').get()
  }

  getUsersList(): Observable<any>{
    return this.angularFireStore.collection('student-collection').doc('users').get()
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
