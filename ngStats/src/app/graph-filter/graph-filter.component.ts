import { Component } from '@angular/core';

export interface GraphOptions {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-graph-filter',
  templateUrl: './graph-filter.component.html',
  styleUrls: ['./graph-filter.component.scss']
})
export class GraphFilterComponent {
  selected = 'Show-%';
}
