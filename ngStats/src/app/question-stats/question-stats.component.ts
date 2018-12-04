import { Component, OnInit } from '@angular/core';
import { ExamDataService } from '../exam-data.service';
import { QuestionInfoService } from '../question-info.service'

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

  constructor( private QIDService: ExamDataService ) { }

  ngOnInit() {

  }

}
