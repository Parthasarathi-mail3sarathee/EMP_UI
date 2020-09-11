import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { Employee } from '../services/employee';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-emp-List',
  templateUrl: './emp.list.component.html',
  styleUrls: ['./emp.list.component.sass']
})

export class EmpListComponent implements OnInit {
  
  title = 'emp-list';
  employeesList$: Observable<Employee[]>;
  selectedEmployee: Employee;

  constructor(private service: RestApiService) { }

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
}
