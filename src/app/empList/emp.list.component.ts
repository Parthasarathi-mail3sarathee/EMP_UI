import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { Employee } from '../services/employee';
import { Observable } from 'rxjs';
import { EmpDataService } from "../services/shared.data.service";

@Component({
  selector: 'app-emp-List',
  templateUrl: './emp.list.component.html',
  styleUrls: ['./emp.list.component.sass']
})

export class EmpListComponent implements OnInit {
  
  title = 'emp-list';
  employeesList$: Observable<Employee[]>;
  selectedEmployee: Employee;

  constructor(private service: RestApiService,private dataService: EmpDataService) { }

  ngOnInit() {
    this.employeesList$  = this.service.getEmployees();

    this.employeesList$.forEach(emp => {
      console.log(emp);
     // WORKING!!!!
    });
  }
  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }
  EditEmp(event, item)
  {
    this.dataService.setEmp(item);
    //this.service.deleteEmployee(item.id);
    console.log("Editing passed item: ",item);
  }
  DeleteEmp(event, item)
  {
    this.service.deleteEmployee(item.id);
    console.log("Checking passed item: ",item);
  }
}
