import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

    questionID;
    dataSchema;
    
    constructor(private dataService: DataService) {
        this.questionID = this.dataService.getQuestion();
        this.dataSchema = this.dataService.getObject();
    }

    
    //randomData = this.dataSchema.questions[0].questionID; 

}
