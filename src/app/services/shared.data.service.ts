import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {
    private selectedEmployee 
    messageEle ='';
    isShown: boolean;
  constructor() { }

  setEmp(value)
  {
    this.selectedEmployee = value;
    console.log(this.selectedEmployee );
  }

  getEmp()
  {
    return this.selectedEmployee;
  }
}