import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ExamDataService } from '../exam-data.service';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})

export class BarGraphComponent implements OnInit {
  title ='Percentage Correct by Question Number';
  questionNums: Number[] = [];
  questionData: Number[] = [];
 
  constructor(private dataService: DataService){
    this.dataService.currentNums.subscribe(questionNums => {this.questionNums = questionNums;});
    this.dataService.currentData.subscribe(questionData => {this.questionData = questionData;});
  }
  
  ngOnInit(){
    this.dataService.currentNums.subscribe(questionNums => {this.questionNums = questionNums, this.barChartLabels = this.questionNums;});
    this.dataService.currentData.subscribe(questionData => {this.questionData = questionData, this.barChartData = [{data: this.questionData, label: 'Average Percent Correct'}];});
 
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
          labelString: 'Average Percent Correct'
          }
        }
      ],
      xAxes: [
        {
          scaleLabel: {
          display: true,
          labelString: 'Question ID'
          }
        }
      ]
    }
  };
  
  public barChartLabels:Number[] = this.questionNums;
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: this.questionData, label: 'Average Percent Correct'}
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
  
  
}

