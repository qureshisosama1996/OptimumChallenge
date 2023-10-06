import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-customerdialog',
  templateUrl: './customerdialog.component.html',
  styleUrls: ['./customerdialog.component.css']
})
export class CustomerdialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CustomerdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
  }
  onSubmit(): void {
    // Pass the selected matter number back to the parent component
   
    this.dialogRef.close();
  }
 
}
