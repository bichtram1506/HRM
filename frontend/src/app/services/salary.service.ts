import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salary } from '../models/salary.model';
import { Employee } from '../models/employee.model';
@Injectable({
  providedIn: 'root',
})
export class SalaryService {
  private apiUrl = 'http://127.0.0.1:8080/api/salaries';

  constructor(private http: HttpClient) {}

  getSalaries(): Observable<Salary[]> {
    return this.http.get<Salary[]>(this.apiUrl);
  }

  getSalaryById(id: number): Observable<Salary> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Salary>(url);
  }

  addSalary(salary: Salary): Observable<Salary> {
    return this.http.post<Salary>(this.apiUrl, salary);
  }

  updateSalary(id: number, salary: Salary): Observable<Salary> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Salary>(url, salary);
  }

  deleteSalary(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/employees`);
  }

}
