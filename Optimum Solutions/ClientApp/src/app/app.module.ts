import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from 'src/Components/toolbar/toolbar.component';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CustomertableComponent } from 'src/Components/customertable/customertable.component';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from 'src/Components/home/home.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreatecustomerComponent } from 'src/Components/createcustomer/createcustomer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { CustomerdialogComponent } from 'src/Components/customerdialog/customerdialog.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { EditcustomerComponent } from 'src/Components/editcustomer/editcustomer.component';
import { DeletecustomerdialogComponent } from 'src/Components/deletecustomerdialog/deletecustomerdialog.component';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CustomertableComponent,
    HomeComponent,
    CreatecustomerComponent,
    CustomerdialogComponent,
    EditcustomerComponent,
    DeletecustomerdialogComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', component:HomeComponent , pathMatch: 'full' },
      { path: 'create-customer', component:CreatecustomerComponent , pathMatch: 'full' },
      { path: 'edit-customer/:id', component:EditcustomerComponent , pathMatch: 'full' },


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
