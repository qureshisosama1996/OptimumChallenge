import { Component } from '@angular/core';
import { OptimumService } from 'src/Shared/optimum.service';
import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UpdateData } from 'src/Shared/Models/UpdataData';
import { ActivatedRoute } from '@angular/router';
import { UserData } from 'src/Shared/Models/UserData';
import { CustomerdialogComponent } from '../customerdialog/customerdialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {
  dataForm!: FormGroup;
  responseText: string | null = null;
  errorMessage: string | null = null;
  genderOptions: string[] = ['Male', 'Female'];
  salutationOptions: string[] = ['Mr', 'Mrs'];

  constructor(
    private yourService: OptimumService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog 

  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.dataForm = this.formBuilder.group({
      id: [this.generateRandomId(),Validators.required],  // Required field
      salutation: [''],
      initials: [''],
      firstname: ['', Validators.required],  // Required field
      gender: ['', Validators.required],  // Required field
      firstname_country_rank: [''],
      firstname_country_frequency: [''],
      lastname: ['', Validators.required],  // Required field
      lastname_country_rank: [''],
      lastname_country_frequency: [''],
      email: ['', Validators.required],
      password: ['',Validators.required],
      country_code: ['',Validators.required],
      country_code_alpha: [''],
      country_name: [''],
      primary_language_code: [''],
      primary_language: [''],
      balance: [0],
      phone_Number: [''],
      currency: [''],
      firstname_ascii: [''],
      lastname_ascii: [''],
      confirmPassword:['']
    });
    this.dataForm.get('country_code')!.setValue('US');
  }

  generateRandomId(): string {
    return Math.floor(Math.random() * 1000000).toString();
  }
  onSubmit() {
    if(this.dataForm.valid){

    if (this.dataForm.get('password')!.value !== this.dataForm.get('confirmPassword')!.value) {
      this.dataForm.get('confirmPassword')!.setErrors({ mustMatch: true });
      return;
    }
  var data:UpdateData = {
    id: this.dataForm.get('id')?.value === '' ? null : this.dataForm.get('id')?.value,
    salutation: this.dataForm.get('salutation')?.value === '' ? null : this.dataForm.get('salutation')?.value,
    initials: this.dataForm.get('initials')?.value === '' ? null : this.dataForm.get('initials')?.value,
    firstname: this.dataForm.get('firstname')?.value === '' ? null : this.dataForm.get('firstname')?.value,
    gender: this.dataForm.get('gender')?.value === '' ? null : this.dataForm.get('gender')?.value,
    firstname_country_rank: this.dataForm.get('firstname_country_rank')?.value === '' ? null : this.dataForm.get('firstname_country_rank')?.value,
    firstname_country_frequency: this.dataForm.get('firstname_country_frequency')?.value === '' ? null : this.dataForm.get('firstname_country_frequency')?.value,
    lastname: this.dataForm.get('lastname')?.value === '' ? null : this.dataForm.get('lastname')?.value,
    lastname_country_rank: this.dataForm.get('lastname_country_rank')?.value === '' ? null : this.dataForm.get('lastname_country_rank')?.value,
    lastname_country_frequency: this.dataForm.get('lastname_country_frequency')?.value === '' ? null : this.dataForm.get('lastname_country_frequency')?.value,
    email: this.dataForm.get('email')?.value === '' ? null : this.dataForm.get('email')?.value,
    password: this.dataForm.get('password')?.value === '' ? null : this.dataForm.get('password')?.value,
    country_code: this.dataForm.get('country_code')?.value === '' ? null : this.dataForm.get('country_code')?.value,
    country_code_alpha: this.dataForm.get('country_code_alpha')?.value === '' ? null : this.dataForm.get('country_code_alpha')?.value,
    country_name: this.dataForm.get('country_name')?.value === '' ? null : this.dataForm.get('country_name')?.value,
    primary_language_code: this.dataForm.get('primary_language_code')?.value === '' ? null : this.dataForm.get('primary_language_code')?.value,
    primary_language: this.dataForm.get('primary_language')?.value === '' ? null : this.dataForm.get('primary_language')?.value,
    balance: this.dataForm.get('balance')?.value,
    phone_Number: this.dataForm.get('phone_Number')?.value === '' ? null : this.dataForm.get('phone_Number')?.value,
    currency: this.dataForm.get('currency')?.value === '' ? null : this.dataForm.get('currency')?.value,
    firstname_ascii: this.dataForm.get('firstname')?.value === '' ? null : (this.dataForm.get('firstname')?.value || '').toLowerCase(),
    lastname_ascii: this.dataForm.get('lastname')?.value === '' ? null : (this.dataForm.get('lastname')?.value || '').toLowerCase(),
  }
    this.yourService.postdata(data).subscribe(
      (response: any) => {
        console.log("in response");
        console.log('Data posted successfully:', response.response);
        this.opendialog(response)
      }

    );
  }
  }
opendialog(datareturned:any){
  if(datareturned.response=='sucess'){
    const dialogRef= this.dialog.open(CustomerdialogComponent,{

      width: '500px',
      data:datareturned,
     })
     dialogRef.afterClosed().subscribe(result=>{
     this.createForm();
    })
  }
  else{
    const dialogRef= this.dialog.open(CustomerdialogComponent,{

      width: '500px',
      data:false,
     })
  }
}
}
