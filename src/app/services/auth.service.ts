import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}`);
  }

  getDetail(id: number): Observable<any[]> {
    console.log(id);
    return this.http.get<any[]>(`${this.url}/${id}`);
  }
}
