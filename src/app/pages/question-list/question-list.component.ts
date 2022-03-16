import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  questionsData:any
  @Input() questionNumber:any=1
  @Output() newItemEvent = new EventEmitter<number>();
  @Input() userData:any


  constructor(private data: DataService) { }

  ngOnInit(): void {
    // this.data.getQuestionList().subscribe(res =>{
    //   this.questionsData = res
    // })
  }

  addNewItem(value: number) {
    this.newItemEvent.emit(value);
  }

}
