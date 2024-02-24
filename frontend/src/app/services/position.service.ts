import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Position } from '../models/position.model';

@Injectable({
  providedIn: 'root',
})
export class PositionService {
  private apiUrl = 'http://127.0.0.1:8080/api/positions'; // Địa chỉ API cho quản lý vị trí

  constructor(private http: HttpClient) {}

  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(this.apiUrl);
  }

  getPositionById(id: number): Observable<Position> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Position>(url);
  }

  addPosition(position: Position): Observable<Position> {
    return this.http.post<Position>(this.apiUrl, position);
  }

  updatePosition(id: number, position: Position): Observable<Position> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Position>(url, position);
  }

  deletePosition(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
