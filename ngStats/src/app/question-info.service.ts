import { Injectable } from '@angular/core';
import { ExamDataService } from './exam-data.service';


export interface ExamData {
  position: number;
  exam: string;
  examDate: string;
  questionType: string;
  difficulty: string;
  questionCognitive: string;
  questionTags: [];
  questionStr: string;
}
const EXAM_DATA: ExamData[] = [
  {position: 1, exam: 'CS 106 F 17', examDate: "10/11/17", questionType: 'Multiple Choice', difficulty: '1', questionCognitive: 'Creating', questionTags: [], questionStr: 'What is 2+2?'},
  {position: 2, exam: 'CS 106 F 18', examDate: "10/09/18", questionType: 'Multiple Choice', difficulty: '2', questionCognitive: 'Analyzing', questionTags: [], questionStr: 'What is Object Oriented Programming?'},
  {position: 3, exam: 'CS 106 S 17', examDate: "3/12/17", questionType: 'Multiple Choice', difficulty: '2', questionCognitive: 'Evaluating', questionTags: [], questionStr: 'Who is your TA?'},
  {position: 4, exam: 'CS 106 S 17', examDate: "3/18/17", questionType: 'Programming', difficulty: '3', questionCognitive: 'Analyzing', questionTags: [], questionStr: 'What is 36/6?'},
  {position: 5, exam: 'CS 106 S 18', examDate: "3/20/18", questionType: 'Programming', difficulty: '2', questionCognitive: 'Evaluating', questionTags: [], questionStr: 'What is the meaning of life?'}, 
  {position: 6, exam: 'CS 106 S 17', examDate: "3/18/17", questionType: 'Multiple Choice', difficulty: '3', questionCognitive: 'Analyzing', questionTags: [], questionStr: 'Write out pi.'}, 
  {position: 7, exam: 'CS 106 S 18', examDate: "3/18/18", questionType: 'Programming', difficulty: '3', questionCognitive: 'Creating', questionTags: [], questionStr: 'Code QuickSort.'},
  {position: 8, exam: 'CS 106 S 17', examDate: "3/18/17", questionType: 'Programming', difficulty: '3', questionCognitive: 'Creating', questionTags: [], questionStr: 'Which sort is O(n)?'},
  {position: 9, exam: 'CS 106 F 18', examDate: "3/18/18", questionType: 'Multiple Choice', difficulty: '3', questionCognitive: 'Analyzing', questionTags: [], questionStr: 'Write an O(log(n)) sort.'},
  {position: 10, exam: 'CS 106 F 18', examDate: "3/18/18", questionType: 'Programming', difficulty: '3', questionCognitive: 'Applying', questionTags: [], questionStr: 'Who is UDs president?'},
  {position: 11, exam: 'CS 106 F 17', examDate: "3/18/17", questionType: 'Multiple Choice', difficulty: '3', questionCognitive: 'Applying', questionTags: [], questionStr: 'What is Angular?'},
  {position: 12, exam: 'CS 106 S 17', examDate: "3/18/17", questionType: 'Programming', difficulty: '1', questionCognitive: 'Analyzing', questionTags: [], questionStr: 'Create a linked list node.'}
];

@Injectable({
  providedIn: 'root'
})

export class QuestionInfoService {
  results;
  rlength;
  constructor(private QIDService: ExamDataService) { 
  } 

  ngOnInit() {
    this.results  = Object.assign([], EXAM_DATA);
    this.rlength = this.results.length;

  }
  
  getQuestion(QID){
    while (this.rlength--) {
      if(this.results[this.rlength].position == QID){
         return this.results[this.rlength]
      }    
    }
  }

  getExam(){
    return this.results;
  }
}
