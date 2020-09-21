import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { Employee } from '../services/employee';
import { Observable } from 'rxjs';
import { EmpDataService } from "../services/shared.data.service";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-emp-List',
  templateUrl: './emp.list.component.html',
  styleUrls: ['./emp.list.component.sass']
})

export class EmpListComponent implements OnInit {
  messageEle ='';
  isShown: boolean;
  title = 'emp-list';
  employeesList$: Observable<Employee[]>;
  selectedEmployee: Employee;

  constructor(private service: RestApiService,private dataService: EmpDataService,private router: Router) { }

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
    this.router.navigate(["emp-add-component"]);
    this.router.navigate(['emp-add-component'], { queryParams: { isEdit: true } });
    console.log("Editing passed item: ",item);
  }
  DeleteEmp(event, item)
  {
    this.service.deleteEmployee(item.id);
    this.messageEle = "Success";
    this.isShown = true;
    this.ngOnInit()
    console.log("Checking passed item: ",item);
  }
}
