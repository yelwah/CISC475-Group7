import { Component, OnInit } from '@angular/core';
import { ExamDataService } from '../exam-data.service';
import { Question } from '../Question';

@Component({
  selector: 'app-question-stats',
  templateUrl: './question-stats.component.html',
  styleUrls: ['./question-stats.component.scss']
})
export class QuestionStatsComponent implements OnInit {

  timesQuestionUsed;
  totalResponses;
  responseRate;
  rawCorrectPercentage;
  correctPercentRespondants;
  averageTimeTaken;
  discriminantValue;

  QID:Question;

  constructor(private QIDService: ExamDataService) {  }

  ngOnInit() {
    this.QIDService.currentQID.subscribe(QID => this.QID = QID);
  }

}
