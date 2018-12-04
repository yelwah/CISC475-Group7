import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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


  dataSourceChange: Subject<any> = new Subject<boolean>();
  constructor() { 
    this.dataSourceChange.subscribe((value) => {
        this.results = value
    });
  }

  getDataSource(){
      return this.dataSource = new MatTableDataSource(this.results);
  }
    
    //parameters, start with difficulty
  filterResults(filters){
      //filters format should be:
      //[input, exam ownership (none = 0, all = 1, only own = 2), exam # (false or a string),
      //question type (0 none, string), difficulty1 (f or true), difficulty2 (f or true),
      //difficulty3(f or true), datestart, dateend, question cognitive array[remember, analyze, apply, understand, evaluate, create]]
      
      //do filtering, then update datasource
      
      //reset
      this.results  = Object.assign([], EXAM_DATA);
      
      //var copy = Object.assign([], EXAM_DATA);
      
      //loop through every one checking filters, send data back.
      
      
      //filter prompt search
      var e = this.results.length;
      var lowercaseFilter = filters[0].toLowerCase();
      if(filters[0] !== '' || filters[0] !== 'Prompt search'){
         while(e--){
          
          if(!this.results[e].questionStr.toLowerCase().includes(lowercaseFilter)){
             this.results.splice(e,1);
             }
      } 
      }
      
      
      //dont have exam ownership data yet
      
      //filter exam name
      var f = this.results.length;
      if(filters[2] ==  ''){
          //dont remove anything
      }
      else{
         while(f--){
          //if strings dont match, remove
          if(this.results[f].exam !== filters[2]){
              this.results.splice(f,1);
          }
        } 
      }
      
      //filter question type
      var g = this.results.length;
      if(filters[3] !== 0){
          //can either be multiple choice or programming now
          if(filters[3] == "multichoice"){
              while(g--){
                if(this.results[g].questionType !== "Multiple Choice"){
                    this.results.splice(g, 1);
                }  
              }
          }
          else if(filters[3] == "programming"){
              while(g--){
                  if(this.results[g].questionType !== "Programming"){
                    this.results.splice(g, 1);
                }  
              }
          }
      }
      
      //filter question difficulty
      //can select more than one difficulty
      //build array from inputs, then splice anything from results that isnt in that array
      var newArr = new Array();
      var d1 = this.results.length;
      var d2 = this.results.length;
      var d3 = this.results.length;
      
      if(filters[4]){
          while(d1--){
              if(this.results[d1].difficulty == '1'){
                  newArr.push(this.results[d1]);
                  //console.log("1");
                  //console.log(newArr);
              }
          }
      }
      
      if(filters[5]){
          while(d2--){
              if(this.results[d2].difficulty == '2'){
                  newArr.push(this.results[d2]);
              }
          }
      }
      
      if(filters[6]){
          while(d3--){
              if(this.results[d3].difficulty == '3'){
                  newArr.push(this.results[d3]);
              }
          }
      }
      
      //if there is a new array, make it to be the results
      if(newArr.length > 0){
          this.results = newArr;
      }
          
      
      //filter date range
      
      //for all exams, check to see if date of exam is inbetween datestart and dateEnd
      
      
      //filter question cognitive level
      
      var newArr2 = new Array();
      var q1 = this.results.length;
      var q2 = this.results.length;
      var q3 = this.results.length;
      var q4 = this.results.length;
      var q5 = this.results.length;
      var q6 = this.results.length;
      
      //for remembering, if true, add all remembering to new array and replace results after all 6 are checked
      if(filters[9]){
         if(filters[9][0]){
          while(q1--){
              if(this.results[q1].questionCognitive == 'Remembering'){
                  newArr2.push(this.results[q1]);
              }
          }
        } 
        if(filters[9][1]){
          while(q2--){
              if(this.results[q2].questionCognitive == 'Analyzing'){
                  newArr2.push(this.results[q2]);
              }
          }
        }
        if(filters[9][2]){
          while(q3--){
              if(this.results[q3].questionCognitive == 'Applying'){
                  newArr2.push(this.results[q3]);
              }
          }
        }
        if(filters[9][3]){
          while(q4--){
              if(this.results[q4].questionCognitive == 'Understanding'){
                  newArr2.push(this.results[q4]);
              }
          }
        }
        if(filters[9][4]){
          while(q5--){
              if(this.results[q5].questionCognitive == 'Evaluating'){
                  newArr2.push(this.results[q5]);
              }
          }
        }
        if(filters[9][5]){
          while(q6--){
              if(this.results[q6].questionCognitive == 'Creating'){
                  newArr2.push(this.results[q6]);
              }
          }
      }
      
      //replace results with new results if at least one value is true
      var cognitiveTruthChecker = filters[9].length;
      while(cognitiveTruthChecker--){
          if(filters[9][cognitiveTruthChecker]){
              this.results = newArr2;
          }
      }
      
      
      //filter topics
      //TODO
            
      
      
      this.dataSource = new MatTableDataSource(this.results);
            

      //console.log(this.results);
      }
  }
    
    getResult(){
        return this.dataSource;
    }

}
