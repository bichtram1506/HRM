import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { Department } from '../models/department.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeeApiUrl = 'http://127.0.0.1:8080/api/employees';
  private departmentApiUrl = 'http://127.0.0.1:8080/api/departments';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeApiUrl);
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.departmentApiUrl);
  }
}
