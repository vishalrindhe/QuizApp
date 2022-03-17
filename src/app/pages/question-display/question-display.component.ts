import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-question-display',
  templateUrl: './question-display.component.html',
  styleUrls: ['./question-display.component.scss']
})
export class QuestionDisplayComponent implements OnInit,OnChanges {

  @Input() userData:any
  @Input() questionData:any 
  @Input() questionNumber:any = 1
  @Output() newItemEvent = new EventEmitter<number>();
  option:any

  constructor(private data: DataService) {
   }
  ngOnChanges(changes: SimpleChanges): void {
    this.nextQuestionOptionVal(this.questionNumber)

  }

  ngOnInit(): void {
    this.nextQuestionOptionVal(this.questionNumber)
  }

  optionChanged(questionNumber:number,val:number){
    this.userData[questionNumber] = val
    this.option = val
    this.data.addUserDataToLocalStorage(this.userData)
  }

  onClick(event:any){
    console.log(event);
  }

  nextQuestionOptionVal(questionNumber:any){
    console.log(questionNumber);
    
    if(this.userData[questionNumber]){
      console.log("val:",this.userData[questionNumber]);
      
      this.option = this.userData[questionNumber]
    }else{
      this.option = undefined
    }
  }

  addNewItem(value: number) {

    this.newItemEvent.emit(value);
  }

  submit(){
    this.data.deleteStartTime()

  }


}
