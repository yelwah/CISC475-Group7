import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BarGraphComponent,
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
