import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeType } from '../models/employee-type.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeTypeService {
  private apiUrl = 'http://127.0.0.1:8080/api/employee-types';

  constructor(private http: HttpClient) {}

  getEmployeeTypes(): Observable<EmployeeType[]> {
    return this.http.get<EmployeeType[]>(this.apiUrl);
  }

  getEmployeeTypeById(id: number): Observable<EmployeeType> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<EmployeeType>(url);
  }

  addEmployeeType(employeeType: EmployeeType): Observable<EmployeeType> {
    return this.http.post<EmployeeType>(this.apiUrl, employeeType);
  }

  updateEmployeeType(id: number, employeeType: EmployeeType): Observable<EmployeeType> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<EmployeeType>(url, employeeType);
  }

  deleteEmployeeType(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
