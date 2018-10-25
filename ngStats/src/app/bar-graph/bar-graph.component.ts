import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent {
  title ='Percentage Correct by Question Number';
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
          labelString: 'Percent Correct'
          }
        }
      ],
      xAxes: [
        {
          scaleLabel: {
          display: true,
          labelString: 'Question Number'
          }
        }
      ]
    }
  };
  public barChartLabels:string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 85, 80, 68, 72, 55, 75, 62, 88, 83], label: 'Percent Correct by Question Number'}
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

