import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Specialization } from '../models/specialization.model';

@Injectable({
  providedIn: 'root',
})
export class SpecializationService {
  private apiUrl = 'http://127.0.0.1:8080/api/specializations';

  constructor(private http: HttpClient) {}

  getSpecializations(): Observable<Specialization[]> {
    return this.http.get<Specialization[]>(this.apiUrl);
  }

  getSpecializationById(id: number): Observable<Specialization> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Specialization>(url);
  }

  addSpecialization(specialization: Specialization): Observable<Specialization> {
    return this.http.post<Specialization>(this.apiUrl, specialization);
  }

  updateSpecialization(id: number, specialization: Specialization): Observable<Specialization> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Specialization>(url, specialization);
  }

  deleteSpecialization(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
