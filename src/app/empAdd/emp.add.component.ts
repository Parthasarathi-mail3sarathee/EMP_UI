import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../services/employee';
import { EmpDataService } from "../services/shared.data.service";

import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'emp-add-form',
  templateUrl: './emp.add.component.html',
  styleUrls: ['./emp.add.component.sass']
})
export class EmployeeAddComponent implements OnInit {
  //messageEle: string;
  empButton: string;
  msg: string;
  newEmployee: Employee;
  messageEle ='';
  isShown: boolean;
      id : number;
      name : string;
      address : string;
      role : string;
  constructor(private service: RestApiService,
    private route: ActivatedRoute,private dataService: EmpDataService,
    private router: Router) { }
  
  ngOnInit() {
    this.route
  .queryParams
  .subscribe(params => {
    // Defaults to 0 if no query param provided.
    if(params['isEdit']=='true'){
      console.log("Will it work");
      this.newEmployee = this.dataService.getEmp();
      console.log(this.newEmployee);
      this.onEdit(this.newEmployee);
      this.empButton="Update Emp";
    }
    else{
      this.resetForm();
    }
    console.log(params['isEdit']);
    
  });
    
    
  }

  resetForm() {
      this.id =  null;
      this.name ='';
      this.address = '';
      this.role = '';
     this.empButton="Add Emp";
  }


  onSubmit(data) {
    console.log("this is submit");
    console.log(data);
    if (data.id == '' || data.id ==null)
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
    console.log("this is edit test "+this.id);
    console.log("this is edit test "+this.name);
    console.log("this is edit test "+this.address);
    console.log("this is edit test "+this.role);
    console.log("this is edit test");
  }
  insertRecord() {
    console.log("this is add");
    //this.service.createEmployee(this.newEmployee);
    this.service.createMyPost(this.newEmployee);
    this.messageEle = "Success";
    this.isShown = true;
    this.msg = "Employee info succussfully inserted";
  }
  modifyName()
  {
    
    this.id= 222;
    this.name= "testName";
    this.address="test address";
    this.role= "test role";
  }
  updateRecord() {
    this.service.ModifyMyPost(this.id,this.newEmployee); 
    this.messageEle = "Success";
    this.isShown = true;
    this.msg = "Employee info succussfully updated";
  }

}