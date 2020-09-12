import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {
    private selectedEmployee 

  constructor() { }

  setEmp(value)
  {
    this.selectedEmployee = value;
  }

  getEmp()
  {
    return this.selectedEmployee;
  }
}