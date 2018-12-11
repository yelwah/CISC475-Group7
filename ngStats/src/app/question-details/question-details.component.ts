import { Component, OnInit } from '@angular/core';
import { ExamDataService } from '../exam-data.service';
import { Question } from '../Question';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss']
})
export class QuestionDetailsComponent implements OnInit {
  QID:Question;

  constructor(private QIDService: ExamDataService) {  }

  ngOnInit() {
    this.QIDService.currentQID.subscribe(QID => this.QID = QID);
  }

}

  