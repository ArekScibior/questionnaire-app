import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogOverview',
  templateUrl: './dialogOverview.component.html',
  styleUrls: ['./dialogOverview.component.css']
})
export class DialogOverviewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>){}

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close('save');
  }


  ngOnInit() {
  }

}
