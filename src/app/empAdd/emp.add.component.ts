import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../services/employee';

// This lets me use jquery
declare var $: any;

@Component({
  selector: 'emp-add-form',
  templateUrl: './emp.add.component.html',
  styleUrls: ['./emp.add.component.sass']
})
export class EmployeeAddComponent implements OnInit {
  newEmployee: Employee;
      id : number;
      name : string;
      address : string;
      role : string;
  constructor(private service: RestApiService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm() {
      this.id =  null;
      this.name ='';
      this.address = '';
      this.role = '';
    
  }


  onSubmit(data) {
    
    console.log(data);
    if (data.id == '')
    {
     this.newEmployee = { id: -1, name : data.name, address : data.address, role : data.role }
      this.insertRecord();
    }
    else
    {  this.newEmployee = { id: data.id, name : data.name, address : data.address, role : data.role }
    
      this.updateRecord();
    }
  }

  insertRecord() {
    this.service.createEmployee(this.newEmployee);
  }

  updateRecord() {
    this.service.updateEmployee(this.id,this.newEmployee);
  }

}