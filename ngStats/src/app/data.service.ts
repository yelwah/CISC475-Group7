import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSort, MatTableDataSource} from '@angular/material';



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
export class DataService {

  results  = Object.assign([], EXAM_DATA);
  dataSource = new MatTableDataSource(this.results);
  selectedDifficulty;


  constructor() { }

  getDataSource(){
      return this.dataSource = new MatTableDataSource(this.results);
  }
    

    //parameters, start with difficulty
  filterResults(difficuty){
      //do filtering, then update datasource
      
      //reset
      this.results  = Object.assign([], EXAM_DATA);
      
      
      //filter on difficulty
      //filter Difficulty 1, 2, or 3
      var j = this.results.length;
      if(this.selectedDifficulty == '1'){
          //remove 2 and 3
          while (j--) {
            if(this.results[j].difficulty !== '1'){
                this.results.splice(j,1);
            }
        } 
      }
      else if(this.selectedDifficulty == '2'){
            //remove 1 and 3   
            while (j--) {
            if(this.results[j].difficulty !== '2'){
                this.results.splice(j,1);
            }    
        } 
      }
      else if(this.selectedDifficulty == '3'){
          //remove 1 and 2
          while (j--) {
            if(this.results[j].difficulty !== '3'){
                this.results.splice(j,1);
            }
        } 
      }
      
      this.dataSource = new MatTableDataSource(this.results);
      console.log(this.results);
  }

}
