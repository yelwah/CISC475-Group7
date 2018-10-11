import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
    
    ngOnInit() {
        this.getQuestion();
    }

    getQuestion() {
        return 51;
    }
    
    object = {
        "questions":[
            {"questionID":"1", "totalResponses":"45", "numCorrect": "7", 
             "questionGroups": [
                {"one": "5", "two": "15", "three": "15", "four": "7", "five":"3"}
             ], 
             "teacherID": "t150", "courseNum": "cisc106", "correctGroup": "four", 
             "avgTime": "1:05", "difficultyLevel": "2"}, 
  
            {"questionID":"2", "totalResponses":"45", "numCorrect": "42", 
             "questionGroups": [
                {"one": "3", "two": "0", "three": "42", "four": "0", "five":"0"}], 
             "teacherID": "t150", "courseNum": "cisc106", "correctGroup": "three", 
             "avgTime": "00:24", "difficultyLevel": "1"},
  
            {"questionID":"3", "totalResponses":"45", "numCorrect": "15", 
             "questionGroups": [
                 {"one": "5", "two": "15", "three": "15", "four": "7", "five":"3"}],
             "teacherID": "t150", "courseNum": "cisc106", "correctGroup": "two", 
             "avgTime": "03:02", "difficultyLevel": "3"}
    ]};
 
    getObject() {
        return this.object;
    }
}
