import { Component } from '@angular/core';
import { OptimumService } from 'src/Shared/optimum.service';
import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UpdateData } from 'src/Shared/Models/UpdataData';
import { UserData } from 'src/Shared/Models/UserData';
import { CustomerdialogComponent } from '../customerdialog/customerdialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent {
  dataForm!: FormGroup;
  responseText: string | null = null;
  errorMessage: string | null = null;
  Id !:string;
  constructor(
    private yourService: OptimumService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog ,
    private activatedRoute:ActivatedRoute

  ) { 

    this.dataForm = this.formBuilder.group({
      id: '',  // Required field
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
    });
  }

  ngOnInit() {
    this.Id = this.activatedRoute.snapshot.params['id'];   
      this.createForm();
  
  }

  createForm() {
    this.yourService.getdatabyid(this.Id).subscribe((response:any)=>{
      console.log(response);
      this.dataForm .setValue({
        id: response.id,  // Required field
        salutation: response.salutation, 
        initials: response.initials, 
        firstname: response.firstname, 
        gender: response.gender,
        firstname_country_rank: response.firstname_country_rank,
        firstname_country_frequency: response.firstname_country_frequency,
        lastname: response.lastname,
        lastname_country_rank: response.lastname_country_rank,
        lastname_country_frequency: response.lastname_country_frequency,
        email: response.email,
        password: response.password,
        country_code: response.country_code,
        country_code_alpha: response.country_code_alpha,
        country_name: response.country_name,
        primary_language_code: response.primary_language_code,
        primary_language: response.primary_language,
        balance: response.balance || 0, 
        phone_Number: response.phone_Number,
        currency: response.currency,
        firstname_ascii: response.firstname_ascii,
        lastname_ascii: response.lastname_ascii,
      });

    });
  
  }

  onSubmit() {
    if(this.dataForm.valid){
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
    firstname_ascii: this.dataForm.get('firstname_ascii')?.value === '' ? null : this.dataForm.get('firstname_ascii')?.value,
    lastname_ascii:this.dataForm.get('lastname_ascii')?.value === '' ? null : this.dataForm.get('lastname_ascii')?.value
  }
    this.yourService.updatedatabyid(this.Id,data).subscribe(
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
      data:datareturned,
     })
  }
}
}
