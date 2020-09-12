import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../services/employee';

@Component({
  selector: 'emp-add-form',
  templateUrl: './emp.add.component.html',
  styleUrls: ['./emp.add.component.sass']
})
export class EmployeeAddComponent implements OnInit {
  //messageEle: string;
  newEmployee: Employee;
  messageEle ='';
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
    if(this.messageEle == "") this.messageEle = "Success";
    else if(this.messageEle == "Success") this.messageEle = "warning";
    else if(this.messageEle == "warning") this.messageEle = "Success";
    
    console.log(this.messageEle);
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

  onEdit(item)
  {
    this.id= item.id;
    this.name= item.name;
    this.address=item.address;
    this.role= item.role;
  }
  insertRecord() {
    //this.service.createEmployee(this.newEmployee);
    this.service.createMyPost(this.newEmployee);
    //this.messageEle = "Success";
  }

  updateRecord() {
    this.service.updateEmployee(this.id,this.newEmployee);
  }

}