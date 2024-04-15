import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AwardsType } from '../models/awards-type.model';

@Injectable({
  providedIn: 'root',
})
export class AwardsTypeService {
  private apiUrl = 'http://127.0.0.1:8080/api/awards-types';

  constructor(private http: HttpClient) {}

  getAwardsTypes(): Observable<AwardsType[]> {
    return this.http.get<AwardsType[]>(this.apiUrl);
  }

  getAwardsTypeById(id: number): Observable<AwardsType> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<AwardsType>(url);
  }

  addAwardsType(awardsType: AwardsType): Observable<AwardsType> {
    return this.http.post<AwardsType>(this.apiUrl, awardsType);
  }

  updateAwardsType(id: number, awardsType: AwardsType): Observable<AwardsType> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<AwardsType>(url, awardsType);
  }

  deleteAwardsType(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
