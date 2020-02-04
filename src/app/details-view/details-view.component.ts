import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../assets/dataQuestionnaire.json';


@Component({
	selector: 'app-details-view',
	templateUrl: './details-view.component.html',
	styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {
	data;
	constructor(private route: ActivatedRoute) {console.log('workign', data)}

	ngOnInit() {
		this.route.paramMap.subscribe(params => {
			this.data = data[+params.get('subjectId')];
		});
	}

}
