import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { DialogOverviewComponent } from '../dialogOverview/dialogOverview.component';
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

	constructor(
		private route: ActivatedRoute, 
		public dialog: MatDialog,
		private cdr: ChangeDetectorRef
		) {}

	ngOnInit() {
		this.route.paramMap.subscribe(params => {
			this.data = data[+params.get('subjectId')];
			this.questions = this.data.questions
		});
	}
	
	openDialog(): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = false;
		dialogConfig.autoFocus = true;
		dialogConfig.minWidth = '700px';
		dialogConfig.height = '200px';
		dialogConfig.position = {
			'top': '15%',
			left: '35%'
		};

		const dialogRef = this.dialog.open(DialogOverviewComponent, dialogConfig);
		dialogRef.afterClosed().subscribe(data => {
			if(!data) {
				this.disabledButtons = false;	
				this.cdr.detectChanges()
			}		
		});
		this.disabledButtons = true;
	}
	
	goNextQ(): void {
		this.numberOfQuestion = this.numberOfQuestion+1
		if (this.numberOfQuestion > this.questions.length) {
			this.numberOfQuestion = this.questions.length
			this.openDialog()
			return;
		}
		if (this.numberOfQuestion < this.questions.length) { this.buttonName = "Next" } else { this.buttonName = "Export to XLS"}
		
	}
	goBack(): void {
		this.numberOfQuestion = this.numberOfQuestion -1
		if (this.numberOfQuestion < this.questions.length) { this.buttonName = "Next" } else { this.buttonName = "Export to XLS"}
	}

}

