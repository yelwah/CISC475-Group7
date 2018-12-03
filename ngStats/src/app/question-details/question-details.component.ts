import { Component, OnInit } from '@angular/core';
import { DataSource } from "@angular/cdk/collections";
import { Question } from "../question.model";
import { QuestionInfoService } from '../question-info.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss']
})
export class QuestionDetailsComponent implements OnInit {

  constructor(private QInfo: QuestionInfoService) { }

  ngOnInit() {
  }

}
