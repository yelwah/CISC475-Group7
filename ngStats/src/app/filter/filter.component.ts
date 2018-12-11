import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSort, MatTableDataSource, MatCheckboxModule} from '@angular/material';
import { QuestionTableComponent } from '../question-table/question-table.component';
import { DataService } from '../data.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Question } from '../Question';


export interface User {
    name: string;
}

export interface ExamData1 {
  position: number;
  exam: string;
  examDate: string;
  questionType: string;
  difficulty: string;
  questionCognitive: string;
  questionTags: [];
}



@Component({
  providers: [QuestionTableComponent],
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})


export class FilterComponent implements OnInit, AfterViewInit {
    //ngModel databinds
    inputText;
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
    filters = new Array();
    inputResult;
    results: Question[][];
    arr: Question[] = [];
    exams = ["CS 106 S 17", "CS 106 F 17", "CS 106 S 18"];
    
    //for autofill
    //options;
    
    options: User[] = [{name: "Initial Result"}];
    filteredOptions: Observable<User[]>;
    
    //load exams from list of previous exams, this is used to determine which exams to search for
    
    //this is the databinding to the exam # options
    //selectedExam;
    selectedDifficulty;
    selectedType; //multi choice = 1, programming = 2
    //endDate;
    selectedCognitiveLevel; 
    // 1 = remember, 2 = analyzing, 3= applying, 4=understanding, 5 = evaulating, 6 = creating, 
    //topics = "";

    
   
    
    
    
  constructor(private dataService: DataService) { 
      //get all question prompts from data service, add to options
      
      
      
   
  }
  
    myControl = new FormControl();

    @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
  
        this.dataService.getQuestions().subscribe((data: Question[][]) => {this.results = data;
        });
    
      var array = new Array<User>();
      var x = this.dataService.getTitlesForFilterAutotype();
      var loopLength = x.length;
       console.log(loopLength);
      while(loopLength--){
        console.log(x[loopLength].questionStr);
         array.push({name: x[loopLength].questionStr}); //this.options.push(x[loopLength].questionStr);
         console.log(loopLength);
         console.log(x[loopLength].questionStr);
      }
      console.log(array);
      this.options = array;
      
   //get all question prompts from data service, add to options
      
      //for autofill
      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      ); 
      
      
      
      
  }
  
  ngAfterViewInit() {
    
  }
  
  
    //for autofill
    displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

    //for autofill
  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  
  public setArr() {
    this.arr = (Object.values(this.results)[0]);
  }
  
  filterResults() {
 
      //establish array of all filters
      //global
      
      this.setArr();
      
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
      //console.log(this.inputText.name);
     /* if(this.inputText == null){
          //skip
      }
      else{
         this.filters.push(this.inputText.name);
      }*/
      var check : string | undefined;

      if(this.inputText == ''){
          //console.log(this.inputText);
          this.filters.push('');
      }
      else if(this.inputText === check){
          //console.log("undefined here");
          this.filters.push('');
      }
      else{
          //console.log("not empty");
          this.filters.push(this.inputText.name);

      }
      //this.filters.push(this.inputText.name);
      
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
      
      console.log(this.filters);
      
      
      //pass to data service to filter
      this.dataService.filterResults(this.filters);
  }
    
    
  
    onSubmit(){
        //do the searching, then reset for next search
     this.filterResults();
    }
    
    placeholder(){
        //this is placeholder function for click in html
    }
}
