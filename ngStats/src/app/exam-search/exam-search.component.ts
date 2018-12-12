import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Question } from '../Question';

@Component({
  selector: 'app-exam-search',
  templateUrl: './exam-search.component.html',
  styleUrls: ['./exam-search.component.scss']
})
export class ExamSearchComponent {
    results;
    reload = false;
    constructor(private dataService: DataService) { 
      //get all question prompts from data service, add to options
      
       this.dataService.getQuestions().subscribe((data: Question[][]) => {this.results = data;
            });
    }

}
