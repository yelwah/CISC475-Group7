import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';

import {MatSort, MatTableDataSource, MatCheckboxModule} from '@angular/material';

import { QuestionTableComponent } from '../question-table/question-table.component';

import { DataService } from '../data.service';




export interface ExamData {
  position: number;
  exam: string;
  examDate: string;
  questionType: string;
  difficulty: string;
  questionCognitive: string;
  questionTags: [];
}
/*
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

*/
@Component({
  providers: [QuestionTableComponent],
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
    
    

    //ngModel databinds
    inputText = '';
    allExams = true;
    checked =false;
    myExams = false;
    selectedExam = false;
    //selectedExams;
    examChoice; //true is all exams, false is my exams
    multiChoice = true;
    programming = false;
    difficultyOne = false;
    difficultyTwo = false;
    difficultyThree = false;
    pickerStart = false;
    dateStart = new FormControl(new Date());
    dateEnd   = new FormControl(new Date());
    cognitiveRemembering = false;
    cognitiveAnalyzing = false;
    cognitiveApplying = false;
    cognitiveUnderstanding = false;
    cognitiveEvaluating = false;
    cognitiveCreating = false;
    topics;
    filters;
    
    
    //load exams from list of previous exams, this is used to determine which exams to search for
    exams = ["CS 106 S 17", "CS 106 F 17", "CS 106 S 18"];
    //this is the databinding to the exam # options
    //selectedExam;
    selectedDifficulty;
    selectedType; //multi choice = 1, programming = 2
    //endDate;
    selectedCognitiveLevel; 
    // 1 = remember, 2 = analyzing, 3= applying, 4=understanding, 5 = evaulating, 6 = creating, 
    //topics = "";

    
   
    
    
    
  constructor(private dataService: DataService, private questionTable: QuestionTableComponent) { }
  
    @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    

  }
    
  legitFilterResults() {
      //establish array of all filters
      //global
      
      //reset filters
      this.filters = new Array();
      
      //get everything selected
      //for material radiobuttons and checkboxes, .checked returns boolean
      
      //get text
      /*
      if((this.inputText != '') || (this.inputText != "Prompt search")){
        this.filters.push(this.inputText);
      }
      else{
          this.filters.push('');
      }*/
      this.filters.push(this.inputText);
      
      //get exam owner
      //if wanting to see all exams
      if(this.examChoice == true){
        this.filters.push(1);   
      }
      //if only wanting to see own exam
      else if (this.examChoice == false){
          this.filters.push(2);
      }
      else{
          //wasnt clicked at all
          this.filters.push(0);
      }

      
      //get exam number
      if(this.selectedExam){
          this.filters.push(this.selectedExam);
      }
      else{
          //nothing clicked
          this.filters.push('');
      }
      
      //get question type
      //multi is t, programming is false
      if(this.selectedType == true){
          this.filters.push("multichoice");
      }
      else if(this.selectedType == false){
          //it is programming,
          this.filters.push("programming");
      }
      //need 3rd case, none selected
      else{
        this.filters.push(0);
      }
      
      //get exam difficulty
      //if they are true, look for them; if false, no
      if(this.difficultyOne){
        this.filters.push(this.difficultyOne);
      }
      else{
          this.filters.push(false);
      }
      if(this.difficultyTwo){
        this.filters.push(this.difficultyTwo);
      }
      else{
          this.filters.push(false);
      }
      if(this.difficultyThree){
        this.filters.push(this.difficultyThree);
      }
      else{
          this.filters.push(false);
      }
      
      //get date range
      if(this.dateStart){
        //start
        this.filters.push(this.dateStart.value);
      }
      else{
          //shouldnt happen
          this.filters.push(false);
      }
      
      if(this.dateEnd){
          //end
        this.filters.push(this.dateEnd.value);
      }
      else{
          //shouldnt happen
          this.filters.push(false);
      }
      
      //get cognitive level
      var cognitiveArray = new Array(this.cognitiveRemembering, this.cognitiveAnalyzing, this.cognitiveApplying, this.cognitiveUnderstanding, this.cognitiveEvaluating, this.cognitiveCreating);
      //add to array
      this.filters.push(cognitiveArray);
      
      //get topics
      //TODO
      //console.log(this.filters);
      
      
      
      //pass to data service to filter
      this.dataService.filterResults(this.filters);
  }
    
    
  filterResults() {
      //console.log("call filter from filter compoennt");
      //this.dataService.filterResults('2');
      
      //then update table
      //get updated data
      //this.dataSource = this.dataService.getDataSource();
      
      //console.log(this.dataSource); working
      
      //refresh table
      //this.questionTable.updateTable();

      
      
      
  }
    
    onSubmit(){
        //do the searching, then reset for next search
     this.legitFilterResults();
        
        
    /*this.inputText = '';
    this.allExams = true;
    this.checked =false;
    this.myExams = false;
    this.selectedExam = false;
    //selectedExams;
    this.examChoice; //true is all exams, false is my exams
    this.multiChoice = true;
    this.programming = false;
    this.difficultyOne = false;
    this.difficultyTwo = false;
    this.difficultyThree = false;
    this.pickerStart = false;
    this.dateStart = new FormControl(new Date());
    this.dateEnd   = new FormControl(new Date());
    this.cognitiveRemembering = false;
    this.cognitiveAnalyzing = false;
    this.cognitiveApplying = false;
    this.cognitiveUnderstanding = false;
    this.cognitiveEvaluating = false;
    this.cognitiveCreating = false;*/
    }
}
