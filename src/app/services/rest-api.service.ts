import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../services/employee';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  // Define API
  apiURL = 'https://localhost:44379/api';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })
  }  

  // HttpClient API get() method => Fetch employees list
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiURL + '/employee/GetAll')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch employee
  getEmployee(id): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + '/employee/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  createMyPost(employee)
  {
    this.http.post<Employee>(this.apiURL + '/employee', JSON.stringify(employee), this.httpOptions)
    .subscribe(data => {
      console.log(data);
    })
  }
  
  // HttpClient API post() method => Create employee
  createEmployee(employee): Observable<Employee> {
    console.log(employee);
    console.log("test");
    return this.http.post<Employee>(this.apiURL + '/employee', JSON.stringify(employee), this.httpOptions)
    .pipe(
    retry(1),
    catchError(this.handleError)
  )  

  }  

  // HttpClient API put() method => Update employee
  updateEmployee(id, employee): Observable<Employee> {
    return this.http.put<Employee>(this.apiURL + '/employee/' + id, JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete employee
  deleteEmployee(id){
    this.http.delete<Employee>(this.apiURL + '/employee/'+id, this.httpOptions).subscribe(data => {
      console.log(data);
    });
  }

  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}