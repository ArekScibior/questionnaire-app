import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { saveAs } from 'file-saver';
import { _ } from 'underscore';

@Injectable({
	providedIn: 'root'
})
export class SaveToXlsService {
	constructor() { }

	public generateXLS(FileName, data): void {
		var data = data
		var idx = 0
		var now = moment();
		var htmlHead = '<html lang="pl"><head>' +
			'<meta http-equiv="content-language" content="pl">' +
			'<meta http-equiv="Content-Type" content="application/vnd.ms-excel;charset=utf-8">' +
			'<style></style>' +
			'</head><body><table border="1">'

		var headers = '<th>L.p</th><th>Question</th><th>Answer</th>'
		
		var rows = _.map(data, (v) => {
			var completeRow = ""
			idx++
			var index = "<td>" + idx + ".</td>"
			var question = "<td>" + v.nameQ + "</td>"
			var answer = "<td>" + v.answer + "</td>"
			completeRow = index + question + answer
			return '<tr>' + completeRow + '</tr>'
		})
		var htmlEndTag = '</body></html>'
		var html = htmlHead + headers + rows.join('') + htmlEndTag
		data = new Blob([html], {type: 'application/vnd.ms-excel;charset=utf-8'});
		var fileName = FileName + now.format('YYYYMM-HHmmss') + '.xls';
		saveAs(data, fileName);
	};
}
