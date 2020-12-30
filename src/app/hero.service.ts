import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private baseUrl= 'http://localhost:8080/hero/heroes';

  constructor(private http: HttpClient) { }

  getHero(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createHero(hero: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, hero);
  }

  updateHero(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteHero(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getHeroList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
