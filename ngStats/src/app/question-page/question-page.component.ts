import { Component, OnInit } from '@angular/core';
import { ExamDataService } from '../exam-data.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {
    QID:string;

  constructor(private QIDService: ExamDataService) { }

  ngOnInit() {
    this.QIDService.currentQID.subscribe(QID => this.QID = QID)
  }

}
