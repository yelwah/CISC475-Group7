import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import 'hammerjs';
import {MatSliderModule} from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppComponent } from './app.component';
import { QuestionTableComponent } from './question-table/question-table.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material.module';
import { MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { TableService } from './table-service.service';
<<<<<<< HEAD
=======
import { AppRoutingModule } from './app-routing.module';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MaterialModule } from './material.module';
>>>>>>> oliepa
import { FilterComponent } from './filter/filter.component';



@NgModule({
  declarations: [
    AppComponent,
    BarGraphComponent,
    QuestionTableComponent,
<<<<<<< HEAD
    FilterComponent 
=======
    FilterComponent
>>>>>>> oliepa
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    BrowserAnimationsModule,

    MatTableModule,
<<<<<<< HEAD
    MatCardModule,
=======
>>>>>>> oliepa
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
export class AppModule { }
