import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';

import {MatSort, MatTableDataSource} from '@angular/material';




export interface ExamData {
  position: number;
  exam: string;
  examDate: string;
  questionType: string;
  difficulty: string;
  questionCognitive: string;
  questionTags: [];
}

const EXAM_DATA: ExamData[] = [
  {position: 1, exam: 'CS 106 F 17', examDate: "10/11/17", questionType: 'Multiple Choice', difficulty: '1', questionCognitive: 'Creating', questionTags: []},
  {position: 2, exam: 'CS 106 F 18', examDate: "10/09/18", questionType: 'Multiple Choice', difficulty: '2', questionCognitive: 'Analyzing', questionTags: []},
  {position: 3, exam: 'CS 106 S 17', examDate: "3/12/17", questionType: 'Multiple Choice', difficulty: '2', questionCognitive: 'Evaluating', questionTags: []},
  {position: 4, exam: 'CS 106 S 17', examDate: "3/18/17", questionType: 'Programming', difficulty: '3', questionCognitive: 'Analyzing', questionTags: []},
  {position: 5, exam: 'CS 106 S 18', examDate: "3/20/18", questionType: 'Programming', difficulty: '2', questionCognitive: 'Evaluating', questionTags: []},
  {position: 6, exam: 'CS 106 S 17', examDate: "3/18/17", questionType: 'Multiple Choice', difficulty: '3', questionCognitive: 'Analyzing', questionTags: []},
  {position: 7, exam: 'CS 106 S 18', examDate: "3/18/18", questionType: 'Programming', difficulty: '3', questionCognitive: 'Creating', questionTags: []},
    {position: 8, exam: 'CS 106 S 17', examDate: "3/18/17", questionType: 'Programming', difficulty: '3', questionCognitive: 'Creating', questionTags: []},
    {position: 9, exam: 'CS 106 F 18', examDate: "3/18/18", questionType: 'Multiple Choice', difficulty: '3', questionCognitive: 'Analyzing', questionTags: []},
    {position: 10, exam: 'CS 106 F 18', examDate: "3/18/18", questionType: 'Programming', difficulty: '3', questionCognitive: 'Applying', questionTags: []},
    {position: 11, exam: 'CS 106 F 17', examDate: "3/18/17", questionType: 'Multiple Choice', difficulty: '3', questionCognitive: 'Applying', questionTags: []},
    {position: 12, exam: 'CS 106 S 17', examDate: "3/18/17", questionType: 'Programming', difficulty: '1', questionCognitive: 'Analyzing', questionTags: []}
];


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
    
    //results = EXAM_DATA;
    results  = Object.assign([], EXAM_DATA);
    /*filtering from inputs*/
    
    /*filter by difficulty*/
    /*loop, for every element, if difficult != input, remove*/
    //selectedDifficulty difficulty1, difficulty2, difficulty3
    //needs to update with the page
    

    
    displayedColumns: string[] = ['position', 'exam', 'examDate', 'questionType', 'difficulty','questionCognitive'];
  dataSource = new MatTableDataSource(this.results);

    exams = ["CS 106 S 17", "CS 106 F 17", "CS 106 S 18"];
    selectedExam;
    selectedDifficulty;
    selectedType; //multi choice = 1, programming = 2
    startDate;
    //endDate;
    selectedCognitiveLevel; // 1 = remember, 2 = analyzing, 3= applying, 4=understanding, 5 = evaulating, 6 = creating, 
    topics = "";
    
      date = new FormControl(new Date());
    
  constructor() { }
  
    //@ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
   // this.dataSource.sort = this.sort;
            console.log(this.results);
          console.log(this.dataSource);

  }
    
   /* 
  filterResults() {
      //filter questiontype 1 or 2
      this.results  = Object.assign([], EXAM_DATA);
      
      //second, delete given parameter
      var i = this.results.length;
      if(this.selectedType == '1'){
         while (i--) {
        if (this.results[i].questionType == 'Programming') { 
            this.results.splice(i, 1);
        } 
       } 
      }
      else if(this.selectedType == '2'){
         while (i--) {
        if (this.results[i].questionType == 'Multiple Choice') { 
            this.results.splice(i, 1);
        } 
       } 
      }
      
      
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
      
      //filter selectedCognitiveLevel 1->6
      var k = this.results.length;
      if(this.selectedCognitiveLevel == '1'){
          while (k--) {
            if (this.results[k].questionCognitive !== 'Remembering') { 
            this.results.splice(k, 1);
            }
        } 
      }
      else if(this.selectedCognitiveLevel == '2'){
          while (k--) {
            if (this.results[k].questionCognitive !== 'Analyzing') { 
            this.results.splice(k, 1);
            }
        } 
      }
      else if(this.selectedCognitiveLevel == '3'){
          while (k--) {
            if (this.results[k].questionCognitive !== 'Applying') { 
            this.results.splice(k, 1);
            }
        } 
      }
      else if(this.selectedCognitiveLevel == '4'){
          while (k--) {
            if (this.results[k].questionCognitive !== 'Understanding') { 
            this.results.splice(k, 1);
            }
        } 
      }
      else if(this.selectedCognitiveLevel == '5'){
          while (k--) {
            if (this.results[k].questionCognitive !== 'Evaluating') { 
            this.results.splice(k, 1);
            }
        } 
      }
      else if(this.selectedCognitiveLevel == '6'){
          while (k--) {
            if (this.results[k].questionCognitive !== 'Creating') { 
            this.results.splice(k, 1);
            }
        } 
      }
      
      this.dataSource = new MatTableDataSource(this.results);
      console.log(this.results);
  }
*/}
