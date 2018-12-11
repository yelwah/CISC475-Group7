import { Component, OnInit } from '@angular/core';
import { ExamDataService } from '../exam-data.service';
import { Question } from '../Question';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {
    QID:Question;

  constructor(private QIDService: ExamDataService) { }

  ngOnInit() {
    this.QIDService.currentQID.subscribe(QID => {this.QID = QID, this.checkType();});
  }
  
  //Only show graph if multiple choice question
  checkType(){
    if(this.QID.questionType == "Multiple Choice"){
        return true;
    }
    else{
        return false;
    }
  }
  

}
