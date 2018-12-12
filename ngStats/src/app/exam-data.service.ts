import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from './Question'

@Injectable({
  providedIn: 'root'
})
export class ExamDataService {
    question: {position: Number;
                exam: string;
                examDate: string;
                questionType: string;
                difficulty: string;
                questionCognitive: string;
                questionTags: [];
                questionStr: string;
                a: Number;
                b: Number;
                c: Number;
                d: Number;
                averageCorrect: Number;
                totalCorrectPts: Number;}
                = {
                position: new Number(1),
                exam: "CS 106 F 17",
                examDate: "10/11/2017",
                questionType: "Multiple Choice",
                difficulty: "1", 
                questionCognitive: "Creating",
                questionTags: [],
                questionStr: "What is 2+2?",
                a: new Number(2),
                b: new Number(90),
                c: new Number(0),
                d: new Number(8),
                averageCorrect: new Number(90),
                totalCorrectPts: new Number(90)
                }
                
    private QIDSource = new BehaviorSubject(this.question)
    
    currentQID = this.QIDSource.asObservable();
    constructor() { }

    changeQID(QID: Question) {
      this.QIDSource.next(QID);
    }
   
    
    
}
