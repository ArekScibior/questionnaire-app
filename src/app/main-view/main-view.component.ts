
import { Component, OnInit } from '@angular/core';
import { GetDataFileService } from '../services/get-data-file.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  constructor(
		private getDataFileService : GetDataFileService,
	) {}
    ngOnInit() {}
    //inicjalne zmienne
    links = this.getDataFileService.getJSONTopics().topics;
    title = 'Questionnaire-app';
    
    try(type) {
        console.log('type', type);
    }

}
