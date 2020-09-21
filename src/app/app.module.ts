import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router'; 

import { EmpDataService } from  "./services/shared.data.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './empList/emp.list.component';
import { EmployeeAddComponent } from "./empAdd/emp.add.component";
import { empMessage } from "./empMsg/emp.msg.component";

const routes: Routes = [
  { path: 'emp-add-component', component: EmployeeAddComponent },
{ path: 'emp-list-component', component: EmpListComponent },]; 

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmployeeAddComponent,
    empMessage
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [EmpDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
