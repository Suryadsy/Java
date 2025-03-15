import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint for employee data

  constructor(private http: HttpClient) {}

  // Fetch employee data from the API
  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);  // Returns an Observable of employee data
  } 
  /*  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>('assets/employees.json');  // Fetch from local JSON file
  } */
}
