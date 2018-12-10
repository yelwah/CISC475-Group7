import { Component, HostListener, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { TableService} from '../table-service.service';
import { DataSource } from "@angular/cdk/collections";
import { Question } from "../Question";
import { DataService } from '../data.service';
import { MatPaginator, MatSort, MatTableDataSource, MatTooltip, TooltipPosition } from '@angular/material';
import { ExamDataService } from '../exam-data.service';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
//import 'rxjs/add/observable/of';


@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'question-table',
  templateUrl: './question-table.component.html',
  styleUrls: ['./question-table.component.scss']
})
export class QuestionTableComponent implements OnInit, AfterViewInit {

   QID:string;

  //  dataStream = new BehaviorSubject<DataTableItem[]>(this.dataService.getResult());
    
//    set data(v: DataTableItem[]) {this.dataStream.next(v);}
   // get data(): DataTableItem[] {return this.dataStream.value;}
    
  
  dataSource= new MatTableDataSource<Question>();
  
   displayedColumns: string[] = ['position', 'exam', 'examDate', 'questionType', 'difficulty','questionCognitive'];

  


  constructor(private dataService: DataService, private QIDService: ExamDataService, private changeDetectorRefs: ChangeDetectorRef) {
      //i commented this out but im not sure what it did, or if it did anything. if issues, uncomment
    //this.dataSource = dataService.results;
    this.dataService.getQuestions().subscribe((data: Question[]) => {this.results = data;});
    
    
   
  }
    

    
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

    
  //dataSource;
    

  ngOnInit() {
     

     this.dataSource = new MatTableDataSource<Question>(this.results);
      
      this.getResults();
    
      // create data source
      this.dataSource = this.dataService.getDataSource();
      
      
      //this.dataSource.sort = this.sort;

     //console.log(this.results);
      
      //sort datasource

      
      //console.log("test");
      //doesnt have results
      
      //this.refresh();
      
      //console.log(this.dataSource);
      
      //subscriptions
      /*const dataSourceSubscription = this.dataSource.subscribe({
         next(position) {
             this.dataSource = position;
         },
          errog(msg) {console.log('error observing data changes', msg);}
      });*/
      this.QIDService.currentQID.subscribe(QID => this.QID = QID)
      
      // update data in data source when available
      this.dataService.currentSource.subscribe(dataSource => {this.dataSource = dataSource, this.update();})
      





  }
  
  ngAfterViewInit() {
    
  }
  
  onRowClicked(row) {
    //console.log('Row clicked: ', row);
    //go to the row
     
  }
  
  
  over(row){ 
    //console.log(row.position);
    this.highlight(row);
    this.getData(row)
    //display the row's question  
    
    //not sure if this is the best place to put this
    this.QIDService.changeQID(row.position)
  }
    
  results;
    
    
    //observe dataSource or changes
    /*const update = new Observable((observer) => {
        const {next, error} = observer;
        let watchid;
        
        
    })*/
  
    //this writes the table
    
    //return dataSource
  getResults() {
    this.results = this.dataService.getDataSource();
      console.log(this.results);//this gets filtered results, in filter component use service to filter
      //this.updateTable();
      return this.results;
      
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
    
  public updateTable(){
      //console.log(this.results); null
      let update = this.getResults();
    

      //commented out to avoid errors
      //this.dataSource = new MatTableDataSource(this.results);
      
      //i commented this out for errors, not sure if it was needed
      //this.dataSource = update;

      //console.log(this.dataSource);
      this.dataSource.sort = this.sort;   
      
      //this.update();
      
      //refresh paginator
       this.dataSource.paginator = this.paginator;
      
      
  }
  

    public update(){
     
        this.dataSource = this.getResults();
     
        //refresh paginator
       this.dataSource.paginator = this.paginator;
       
       this.dataSource.sort = this.sort;
        
    }
}
