/* vim: set ts=2: */
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { Question } from './Question';
import { ReadVarExpr } from '@angular/compiler';


//commented out because clear() method is necessary 
/*
@Component({
	selector: 'sheetjs',
	template: `<nav class="navbar navbar-expand-lg navbar-light" style="background-color: ghostwhite;">
	<a class="navbar-brand" [routerLink]="['']">Exam Statistics Search Tool</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	  <span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarSupportedContent">
	  <ul class="navbar-nav mr-auto">
		<li class="nav-item">
		  <a class="nav-link" [routerLink]="['']">Exam Search<span class="sr-only">(current)</span></a>
		</li> 
	  </ul>
	</div>
	<button (click)="clear()">clear</button>
	<input type="file" (change)="onFileChange($event)" multiple="false" name="Input" >
</nav>
<div id="container">
	<router-outlet>
	</router-outlet>
</div>
	`
})
*/

//removed function calls which force recompiling of site page
@Component({
	selector: 'sheetjs',
	template: `<nav class="navbar navbar-expand-lg navbar-light" style="background-color: ghostwhite;">
	<a class="navbar-brand" [routerLink]="['']">Exam Statistics Search Tool</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	  <span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarSupportedContent">
	  <ul class="navbar-nav mr-auto">
		<li class="nav-item">
		  <a class="nav-link" [routerLink]="['']">Exam Search<span class="sr-only">(current)</span></a>
		</li> 
	  </ul>
	</div>
	<button>clear</button>
	<input type="file" multiple="false" name="Input" >
</nav>
<div id="container">
	<router-outlet>
	</router-outlet>
</div>
	`
})


export class SheetJSComponent {
	static data: Question[][] = null;
	wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };

	onFileChange(evt: any) {
		/* wire up file reader */
		const target: DataTransfer = <DataTransfer>(evt.target);
		if (target.files.length !== 1) throw new Error('Cannot use multiple files');
		const reader: FileReader = new FileReader();
		reader.onload = (e: any) => {
			/* read workbook */
			const bstr: string = e.target.result;
			const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

			/* grab first sheet */
			const wsname: string = wb.SheetNames[0];
			const ws: XLSX.WorkSheet = wb.Sheets[wsname];

			/* save data */
			SheetJSComponent.data = <Question[][]>(XLSX.utils.sheet_to_json(ws, {header: 1}));
			var dataSize: any[] = size();
			if(dataSize[0] < 1 || dataSize[1] == 0)
			{
				SheetJSComponent.data = null;
			}
		};
		reader.readAsBinaryString(target.files[0]);
	}
    //method reloads page - does not work
	clear(): void{
		//SheetJSComponent.data = null;
	}

	static getData(){
		return this.data;
	}
}
function size(){
    var row_count = SheetJSComponent.data.length;
    var row_sizes = []
    for(var i=0;i<row_count;i++){
        row_sizes.push(SheetJSComponent.data[i].length)
    }
    return [row_count, Math.max.apply(null, row_sizes)]
}

