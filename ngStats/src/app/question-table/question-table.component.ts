import { Component, OnInit } from '@angular/core';
import { TableService} from '../table-service.service';
import { Observable } from "rxjs";
import { DataSource } from "@angular/cdk/collections";
import { Question } from "../question.model";

@Component({
  selector: 'question-table',
  templateUrl: './question-table.component.html',
  styleUrls: ['./question-table.component.scss']
})
export class QuestionTableComponent implements OnInit {

  dataSource= new TableDataSource(this.tableService);
  displayedColumns= ['name', 'email', 'phone', 'company']

  constructor(private tableService: TableService) { }

  ngOnInit() {
  }

}

export class TableDataSource extends DataSource<any> {
  constructor(private questionService: TableService) {
    super();
  }

  connect(): Observable<Question[]> {
    return this.questionService.getQuestion();
  }

  disconnect() {}
}
