import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { DialogOverviewComponent } from '../dialogOverview/dialogOverview.component';
import { SaveToXlsService } from '../services/save-to-xls.service';
import { data } from '../../assets/dataQuestionnaire.json';
import { _ } from 'underscore';


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
		private cdr: ChangeDetectorRef,
		public xls: SaveToXlsService
		) {}

	ngOnInit() {
		this.route.paramMap.subscribe(params => {
			this.data = _.find(data, (v, key) => {
				return v.fullName == params.get('subjectName')
			})
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
			} else {
				console.log('export', this.data.questions)
				this.xls.generateXLS("Ankieta:"+this.data.fullName, this.data.questions)
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

