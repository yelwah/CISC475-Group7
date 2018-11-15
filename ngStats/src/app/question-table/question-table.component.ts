import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { TableService} from '../table-service.service';
import { Observable } from "rxjs";
import { DataSource } from "@angular/cdk/collections";
import { Question } from "../question.model";
import { DataService } from '../data.service';
import {MatPaginator, MatSort, MatTableDataSource, MatToolTip, TooltipPosition} from '@angular/material';

@Component({
  selector: 'question-table',
  templateUrl: './question-table.component.html',
  styleUrls: ['./question-table.component.scss']
})
export class QuestionTableComponent implements OnInit, AfterViewInit {

  //dataSource= new TableDataSource(this.tableService);
   displayedColumns: string[] = ['position', 'exam', 'examDate', 'questionType', 'difficulty','questionCognitive'];

  


  constructor(private tableService: TableService, private dataService: DataService) {  }
    
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

    
  dataSource;

  ngOnInit() {
      this.getResults();
    
      //this.dataSource = new MatTableDataSource(this.results);
      this.dataSource = this.results;
      
      this.dataSource.sort = this.sort;

      console.log(this.results);
      
      //sort datasource
      //this.dataSource.sort = this.sort;
      
      console.log("test");
      //doesnt have results
      console.log(this.dataSource);
      
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  onRowClicked(row) {
    console.log('Row clicked: ', row);
    //go to the row
  }
  
  
  over(row){ 
    console.log(row.position);
    this.highlight(row);
    this.getData(row)
    //display the row's question   
  }
    
  results;
  
    //this writes the table
    
    //return dataSource
  getResults(): void {
    this.results = this.dataService.getDataSource();
      console.log(this.results);
      
  }
  public selectedRowIndex: number = -1;

  public highlight(row){
    this.selectedRowIndex = row.position;
    //console.log('highlight', row.position);
  }
  
  public dataFromService = '';
  
  public getData(row){
    //service access here
    this.dataFromService = row.questionStr;    
  }

}
