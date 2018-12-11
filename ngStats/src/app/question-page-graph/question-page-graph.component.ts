import { Component, OnInit } from '@angular/core';
import { ExamDataService } from '../exam-data.service';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Question } from '../Question';


@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-question-page-graph',
  templateUrl: './question-page-graph.component.html',
  styleUrls: ['./question-page-graph.component.scss']
})
export class QuestionPageGraphComponent implements OnInit {
  QID:Question;
  multArray:string[] = ["A","B","C","D"];
  averages:Number[] = [];
  
  
  ngOnInit(){
    this.QIDService.currentQID.subscribe(QID => {this.QID = QID, this.barChartData = [{data: this.getData(), label: 'Answer Choice Percentage'}];});
  }
  
  title ='Answer Choice Percentage';
 
  constructor(private QIDService: ExamDataService){
    
  }
  
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
            display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMax: 100,
            beginAtZero: true
          },
          scaleLabel: {
          display: true,
          labelString: 'Percentage'
          }
        }
      ],
      xAxes: [
        {
          scaleLabel: {
          display: true,
          labelString: 'Answer Choice'
          }
        }
      ]
    }
  };
  
  public barChartLabels:string[] = this.multArray;
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: this.averages, label: 'Answer Choice Percentage'}
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {
  }
  
  public getData(){
    this.averages.push(this.QID.a);
    this.averages.push(this.QID.b);
    this.averages.push(this.QID.c);
    this.averages.push(this.QID.d);
    return this.averages;
  }
  
  public getType(){
    if(this.QID.questionType == "Multiple Choice"){
        return true;
    }
    else return false;
  }
  

}

