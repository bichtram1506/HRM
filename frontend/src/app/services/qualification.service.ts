import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Qualification } from '../models/qualification.model';

@Injectable({
  providedIn: 'root',
})
export class QualificationService {
  private apiUrl = 'http://127.0.0.1:8080/api/qualifications';

  constructor(private http: HttpClient) {}

  getQualifications(): Observable<Qualification[]> {
    return this.http.get<Qualification[]>(this.apiUrl);
  }

  getQualificationById(id: number): Observable<Qualification> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Qualification>(url);
  }

  addQualification(qualification: Qualification): Observable<Qualification> {
    return this.http.post<Qualification>(this.apiUrl, qualification);
  }

  updateQualification(id: number, qualification: Qualification): Observable<Qualification> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Qualification>(url, qualification);
  }

  deleteQualification(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
