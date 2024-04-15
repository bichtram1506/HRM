import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { Department } from '../models/department.model';
import { Qualification } from '../models/qualification.model';
import { Specialization } from '../models/specialization.model';
import { EmployeeType } from '../models/employee-type.model';
import { Level } from '../models/level.model';
import { Position } from '../models/position.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://127.0.0.1:8080/api';

  constructor(private http: HttpClient) {}

  // Methods to fetch employee-related data types

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiUrl}/departments`);
  }

  getEmployeeTypes(): Observable<EmployeeType[]> {
    return this.http.get<EmployeeType[]>(`${this.apiUrl}/employee-types`);
  }

  getLevels(): Observable<Level[]> {
    return this.http.get<Level[]>(`${this.apiUrl}/levels`);
  }

  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(`${this.apiUrl}/positions`);
  }

  getQualifications(): Observable<Qualification[]> {
    return this.http.get<Qualification[]>(`${this.apiUrl}/qualifications`);
  }

  getSpecializations(): Observable<Specialization[]> {
    return this.http.get<Specialization[]>(`${this.apiUrl}/specializations`);
  }

  // Methods to fetch employee data

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/employees`);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/employees/${id}`);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiUrl}/employees`, employee);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/employees/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/employees/${id}`);
  }
}
