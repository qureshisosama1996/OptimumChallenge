import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deletecustomerdialog',
  templateUrl: './deletecustomerdialog.component.html',
  styleUrls: ['./deletecustomerdialog.component.css']
})
export class DeletecustomerdialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeletecustomerdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
  }
  onSubmit(): void {
    // Pass the selected matter number back to the parent component
   
    this.dialogRef.close();
  }
}
