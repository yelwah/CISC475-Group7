import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { QuestionTableComponent } from './question-table/question-table.component';

import { MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { TableService } from './table-service.service';



@NgModule({
  declarations: [
    AppComponent,
    BarGraphComponent,
    QuestionTableComponent,
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
