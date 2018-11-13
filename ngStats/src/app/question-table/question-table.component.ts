import { Component, OnInit, ViewChild } from '@angular/core';
import { TableService} from '../table-service.service';
import { Observable } from "rxjs";
import { DataSource } from "@angular/cdk/collections";
import { Question } from "../question.model";
import { DataService } from '../data.service';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'question-table',
  templateUrl: './question-table.component.html',
  styleUrls: ['./question-table.component.scss']
})
export class QuestionTableComponent implements OnInit {

  //dataSource= new TableDataSource(this.tableService);
   displayedColumns: string[] = ['position', 'exam', 'examDate', 'questionType', 'difficulty','questionCognitive'];
    
  


  constructor(private tableService: TableService, private dataService: DataService) {  }
    
  @ViewChild(MatSort) sort: MatSort;
    
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
    
  results;
  
    //this writes the table
    
    //return dataSource
  getResults(): void {
    this.results = this.dataService.getDataSource();
      console.log(this.results);
      
  }
    
  

}
