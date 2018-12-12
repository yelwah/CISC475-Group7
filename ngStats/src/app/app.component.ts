import { Component } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({  
	selector: 'app-root',
  //template: `<sheetjs></sheetjs>`
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Question Statistics';
  myDate = new Date();
}
