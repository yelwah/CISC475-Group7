import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MatNativeDateModule} from '@angular/material';

import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { QuestionTableComponent } from './question-table/question-table.component';

import { MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { TableService } from './table-service.service';
import { AppRoutingModule } from './app-routing.module';
import {MatSliderModule} from '@angular/material/slider';

import {MatDatepickerModule} from '@angular/material/datepicker';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MaterialModule } from './material.module';
import { FilterComponent } from './filter/filter.component';
import { ExamSearchComponent } from './exam-search/exam-search.component';
import { GraphFilterComponent } from './graph-filter/graph-filter.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { QuestionStatsComponent } from './question-stats/question-stats.component';



@NgModule({
  declarations: [
    AppComponent,
    BarGraphComponent,
    QuestionTableComponent,
    FilterComponent,
    ExamSearchComponent,
    GraphFilterComponent,
    QuestionPageComponent,
    QuestionDetailsComponent,
    QuestionStatsComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule);
