import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assignment } from '../models/assignment.model';

@Injectable({
  providedIn: 'root',
})
export class AssignmentService {
  private apiUrl = 'http://127.0.0.1:8080/api/assignments';

  constructor(private http: HttpClient) {}

  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.apiUrl);
  }

  getAssignmentById(id: number): Observable<Assignment> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Assignment>(url);
  }

  addAssignment(assignment: Assignment): Observable<Assignment> {
    return this.http.post<Assignment>(this.apiUrl, assignment);
  }

  updateAssignment(id: number, assignment: Assignment): Observable<Assignment> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Assignment>(url, assignment);
  }

  deleteAssignment(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
