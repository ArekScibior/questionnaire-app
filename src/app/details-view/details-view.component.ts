import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../assets/dataQuestionnaire.json';


@Component({
	selector: 'app-details-view',
	templateUrl: './details-view.component.html',
	styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {
	data: any;
	questions: [];
	numberOfQuestion: number = 1;
	buttonName: string = "Next";
	disabledButtons: boolean = false;
	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.paramMap.subscribe(params => {
			this.data = data[+params.get('subjectId')];
			this.questions = this.data.questions
		});
	}
	goNextQ() {
		this.numberOfQuestion = this.numberOfQuestion+1
		if (this.numberOfQuestion > this.questions.length) {
			this.numberOfQuestion = this.questions.length
			this.disabledButtons = true;
			console.log('exported')
			return;
		}
		if (this.numberOfQuestion < this.questions.length) { this.buttonName = "Next" } else { this.buttonName = "Export to XLS"}
		
	}
	goBack() {
		this.numberOfQuestion = this.numberOfQuestion -1
		if (this.numberOfQuestion < this.questions.length) { this.buttonName = "Next" } else { this.buttonName = "Export to XLS"}
	}

}
