/* vim: set ts=2: */
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

type AOA = any[][];

@Component({
	selector: 'sheetjs',
	template: ``
})

export class SheetJSComponent {
	static data: AOA = null;
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
			SheetJSComponent.data = <AOA>(XLSX.utils.sheet_to_json(ws, {header: 1}));
			var dataSize: any[] = size();
			if(dataSize[0] == 1 || dataSize[0] == 0)
			{
				SheetJSComponent.data = null;
			}

		};
		reader.readAsBinaryString(target.files[0]);
	}
	
	static getData(): AOA{
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

