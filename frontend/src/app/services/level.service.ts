import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Level } from '../models/level.model';

@Injectable({
  providedIn: 'root',
})
export class LevelService {
  private apiUrl = 'http://127.0.0.1:8080/api/levels';

  constructor(private http: HttpClient) {}

  getLevels(): Observable<Level[]> {
    return this.http.get<Level[]>(this.apiUrl);
  }

  getLevelById(id: number): Observable<Level> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Level>(url);
  }

  addLevel(level: Level): Observable<Level> {
    return this.http.post<Level>(this.apiUrl, level);
  }

  updateLevel(id: number, level: Level): Observable<Level> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Level>(url, level);
  }

  deleteLevel(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
