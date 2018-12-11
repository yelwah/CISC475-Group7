import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Injectable, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Question } from './Question';
import { SheetJSComponent } from './sheetjs.component';


type AOA = any[][];

@Injectable({
  providedIn: 'root'
})

export class DataService implements OnInit, AfterViewInit{

  
    //Set url to json file or api call to retrieve data
    url = 'http://localhost:4200/assets/QuestionData.json';
  
    //Result arrays used in filter method
    results: Question[][];
    resultsarr: Question[] = [];
    arr: Question[] = [];
  
    dataSource;
    private source = new BehaviorSubject(new MatTableDataSource(this.arr));
    currentSource = this.source.asObservable(); 
  
    questionNums: Number[] = [];
    questionData: Number[] = [];
  
    private qnumsource = new BehaviorSubject(this.questionNums);
    private qdatasource = new BehaviorSubject(this.questionData);
    currentNums = this.qnumsource.asObservable();
    currentData = this.qdatasource.asObservable();

    importData: AOA;

    dataSourceChange: Subject<any> = new Subject<boolean>();
  
    constructor(private http: HttpClient) {
        //this.http.get(this.url).subscribe((data: Question[]) => {this.results = data;});
   
      
        this.getQuestions().subscribe((data => {
            this.results = data,
            this.dataSource = new MatTableDataSource(this.arr),
            this.arr = (Object.values(this.results)[0]),
            this.dataSourceChange.subscribe((value) => {
                this.results = value     
            });
        }));
        
        
     
        //this.dataSource = new MatTableDataSource(this.results);
        //this.arr = (Object.values(this.results)[0]);
    }
    
    
    ngOnInit(){
        this.http.get(this.url).subscribe((data: Question[][]) => {this.results = data;});
        this.dataSourceChange.subscribe((value) => {
            this.arr = value     
        });

        this.importData = SheetJSComponent.getData();
        if(this.importData == null)
        {
            
        }
    }
  
    ngAfterViewInit(){
        console.log("reach");
    }
    

    //Filter function with filters parameter from filter.component.ts
    filterResults(filters){
    
        this.http.get(this.url).subscribe((data: Question[][]) => {this.results = data;});

        this.dataSourceChange.subscribe((value) => {
            this.arr = value,    
            console.log(this.arr)
        });
        

        this.setArr();

        console.log(Object.keys(Object.values(this.results)[0]).length);
        console.log(this.arr.length);
        

        //filters format should be:
        //[input, exam ownership (none = 0, all = 1, only own = 2), exam # (false or a string),
        //question type (0 none, string), difficulty1 (f or true), difficulty2 (f or true),
        //difficulty3(f or true), datestart, dateend, question cognitive array[remember, analyze, apply, understand, evaluate, create]]



        //filter prompt search
        var e = this.arr.length;
        console.log(this.arr.length);

        var lowercaseFilter = filters[0].toLowerCase();
        if(filters[0] !== '' || filters[0] !== 'Prompt search'){
            while(e--){

            if(!this.arr[e].questionStr.toLowerCase().includes(lowercaseFilter)){
                this.arr.splice(e,1);
                }
          } 
        }


        //don't have exam ownership data yet - All Exams vs. My Exams feature unavailable

        //filter exam name
        var f = this.arr.length;
        if(filters[2] ==  ''){
            //dont remove anything
        }
        else{
            while(f--){
                //if strings dont match, remove
                if(this.arr[f].exam !== filters[2]){
                    this.arr.splice(f,1);
                }
            } 
        }

        //filter question type
        var g = this.arr.length;
        if(filters[3] !== 0){
            //can either be multiple choice or programming now
            if(filters[3] == "multichoice"){
                while(g--){
                    if(this.arr[g].questionType !== "Multiple Choice"){
                        this.arr.splice(g, 1);
                    }  
                }
            }
            else if(filters[3] == "programming"){
                while(g--){
                    if(this.arr[g].questionType !== "Programming"){
                        this.arr.splice(g, 1);
                    }  
                }
            }
        }

        //filter question difficulty
        //can select more than one difficulty
        //build array from inputs, then splice anything from results that isnt in that array
        var newArr = new Array();
        var d1 = this.arr.length;
        var d2 = this.arr.length;
        var d3 = this.arr.length;

        if(filters[4]){
            while(d1--){
                if(this.arr[d1].difficulty == "1"){
                    newArr.push(this.arr[d1]);                  
                }
            }
        }

        if(filters[5]){
            while(d2--){
                if(this.arr[d2].difficulty == "2"){
                   newArr.push(this.arr[d2]);
                }
            }
        }

        if(filters[6]){
            while(d3--){
                if(this.arr[d3].difficulty == "3"){
                    newArr.push(this.arr[d3]);
                }
            }
        }

        //if there is a new array, make it to be the results
        if(newArr.length > 0){
            this.arr = newArr;
        }


        //filter date range

        //for all exams, check to see if date of exam is inbetween datestart and dateEnd


        //filter question cognitive level

        var newArr2 = new Array();
        var q1 = this.arr.length;
        var q2 = this.arr.length;
        var q3 = this.arr.length;
        var q4 = this.arr.length;
        var q5 = this.arr.length;
        var q6 = this.arr.length;

        //for remembering, if true, add all remembering to new array and replace results after all 6 are checked
        if(filters[9]){
            if(filters[9][0]){
                while(q1--){
                    if(this.arr[q1].questionCognitive == "Remembering"){
                        newArr2.push(this.arr[q1]);
                    }
                }
            } 
            if(filters[9][1]){
                while(q2--){
                    if(this.arr[q2].questionCognitive == "Analyzing"){
                        newArr2.push(this.arr[q2]);
                    }
                }
            }
            if(filters[9][2]){
                while(q3--){
                    if(this.arr[q3].questionCognitive == "Applying"){
                        newArr2.push(this.arr[q3]);
                    }
                }
            }
            if(filters[9][3]){
                while(q4--){
                    if(this.arr[q4].questionCognitive == "Understanding"){
                        newArr2.push(this.arr[q4]);
                    }
                }
            }
            if(filters[9][4]){
                while(q5--){
                    if(this.arr[q5].questionCognitive == "Evaluating"){
                        newArr2.push(this.arr[q5]);
                    }
                }
            }
            if(filters[9][5]){
                while(q6--){
                    if(this.arr[q6].questionCognitive == "Creating"){
                        newArr2.push(this.arr[q6]);
                    }
                }
            }


            //replace results with new results if at least one value is true
            var cognitiveTruthChecker = filters[9].length;
            while(cognitiveTruthChecker--){
                if(filters[9][cognitiveTruthChecker]){
                    this.arr = newArr2;
                }
            }


            //filter topics
            //TODO


        }
        
        this.arr.sort((a, b) => a.position < b.position ? -1 : a.position > b.position ? 1 : 0)

        //Update dataSource
        this.dataSource = new MatTableDataSource(this.arr);


        //Send alert if no filters match    
        if(this.dataSource.data.length == 0){
            console.log(this.dataSource.data.length);
            console.log("no results");
            //show an alert indicating there are no results and give an option to clear the inputs/start over
            alert('No results');
        }
        
        //Changing sources to send updates to components
        this.changeSource(this.dataSource);
        this.changeqNumsSource(this.getQuestionConfig());
        this.changeqDataSource(this.getDataConfig());
    }

    
    //Other Get Functions:
    
    getResult(){
        return this.dataSource;
    }
    
    getQuestions(): Observable<any> {
        return this.http.get(this.url);
    }
  
    setArr() {
        this.arr = (Object.values(this.results)[0]);
    }

    getQuestionConfig():Number[]{
        this.questionNums.length = 0;
        var q1 = 0;
        while(q1 < this.arr.length){
            this.questionNums.push(this.arr[q1].position);
            q1++;
        }
        return this.questionNums;
    }

    getDataConfig():Number[]{
        this.questionData.length = 0;
        var q1 = 0;
        while(q1 < this.arr.length){
            this.questionData.push(this.arr[q1].averageCorrect);
            q1++;
        }
        return this.questionData;
    }
    
     getTitlesForFilterAutotype(){
        return this.arr;
    }

    getDataSource(){
      return this.dataSource = new MatTableDataSource(this.arr);
    }
    
    loadDataSource(){
        this.dataSource = new MatTableDataSource(this.arr);
        
    }
    
    //Sorting the questions by position
    compare(a, b) {
        if (a.position < b.position) {
            return -1;
        }
        if (a.position > b.position) {
            return 1;
        }
        // a must be equal to b
        return 0;
    }
    
    //Updating sources to send to subscriptions
    changeSource(dataSource: MatTableDataSource<Question>) {
        this.source.next(dataSource);    
    }
 
    changeqNumsSource(questionNums: Number[]) {
        this.qnumsource.next(questionNums);  
    }
    
    changeqDataSource(questionData: Number[]) {
        this.qdatasource.next(questionData);   
    }
}
