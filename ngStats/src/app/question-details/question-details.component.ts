import { Component, OnInit } from '@angular/core';
import { QuestionInfoService } from '../question-info.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss']
})
export class QuestionDetailsComponent implements OnInit {
  
  QID:string;
  exam:object;

  constructor(private QInfo: QuestionInfoService) {  }

  ngOnInit() {
    this.exam = this.QInfo.getExam();
  }

}
