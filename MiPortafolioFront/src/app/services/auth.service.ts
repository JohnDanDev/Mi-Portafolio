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

  login(credentials: any){
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(res =>{
        if(res.token){
          localStorage.setItem('token', res.token);
        }
      })
    );
  }

  logout(){
    localStorage.clear();
  }

  getToken(){
    return localStorage.getItem('token');
  }
  isAuthenticated(){
    return !!this.getToken();
  }
  
}
