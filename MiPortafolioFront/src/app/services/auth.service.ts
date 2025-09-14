import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/api';
  constructor(private http: HttpClient){}

  //Metodo para hacer login
  login(credentials:{email: string, password: string}): Observable<any>{
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
  
  logout(): Observable<any>{
    return this.http.post(`${this.apiUrl}/logout`,{});
  }

  me(): Observable<any>{
    return this.http.get(`${this.apiUrl}/me`);
  }
}
