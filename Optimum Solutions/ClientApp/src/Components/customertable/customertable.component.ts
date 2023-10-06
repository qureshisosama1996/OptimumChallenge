import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator } from '@angular/material/paginator';
import { OptimumService } from 'src/Shared/optimum.service';
import { UserData } from 'src/Shared/Models/UserData';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DeletecustomerdialogComponent } from '../deletecustomerdialog/deletecustomerdialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-customertable',
  templateUrl: './customertable.component.html',
  styleUrls: ['./customertable.component.css']
})
export class CustomertableComponent implements AfterViewInit,OnInit{
  displayedColumns = ['CustomerId','Firstname','Lastname', 'Email','Phone_Number', 'Country_code' ,'Gender','Balance','delete','edit'];
  dataresult!:UserData[];
  dataSource = new MatTableDataSource(this.dataresult);
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  selectedEmail!:string;
  selectedName!:string;
  selectedId!:string;
 
  applyqureyFilter() {
    
    this.dataSource.filterPredicate = (data: any) => {
      console.log(data);
      console.log(this.selectedName);
        const emailMatch = this.selectedEmail!='' ? data['email'].toLowerCase().includes(this.selectedEmail.toLowerCase().trim()) : true;
        const nameMatch = this.selectedName!='' ?  (data['firstname']!=null && data['firstname'].toLowerCase().includes(this.selectedName.toLowerCase().trim())):true;

        const idMatch = this.selectedId!='' ? data['id']!=null && (data['id'].toLowerCase().includes(this.selectedId.toLowerCase().trim())):true;
       
        return emailMatch && nameMatch && idMatch;
    };
    this.dataSource.filter = 'filterdata';

  }

  constructor(private service:OptimumService,private route :Router,private router:ActivatedRoute,private dialog:MatDialog) {
    this.getdata();
    this.selectedEmail = '';
    this.selectedName = '';
    this.selectedId = '';

  }
  ngOnInit(): void {


  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;

  }


  onReset(){
    this.selectedEmail = '';    // Clear selectedEmail filter value
    this.selectedName = '';   // Clear selectedName filter value
    this.selectedId = '';  // Clear selectedId filter value
    this.dataSource.filter = '';
    // Apply filter with empty values to reset
  }

  getdata(){
 
  
    this.dataresult=[];
   this.service.getdata().subscribe(response=>{
    this.dataresult=response;
    this.dataSource.data=this.dataresult;
    console.log(response);

   }  
    )
  }
  createcustomer() {
    this.route.navigate(['/create-customer']);
  }
  delete(data:any){
    this.service.deletedatabyid(data.id).subscribe(res=>{
      const dialogRef= this.dialog.open(DeletecustomerdialogComponent,{

        width: '500px',
        data:res,
       })
       dialogRef.afterClosed().subscribe(result=>{
        this.getdata();
      }) 
    })
  
  }
  edit(data: any) {
    const Id = data.id;
    this.route.navigate([`/edit-customer/${Id}`]); 
  }
    
}
