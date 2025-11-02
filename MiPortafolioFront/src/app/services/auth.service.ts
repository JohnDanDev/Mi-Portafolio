import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  saveToken(token: any) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:8000/api';
  constructor(private http: HttpClient){}

  login(data: any){
    return this.http.post<any>(`${this.apiUrl}/login`, data).pipe(
      tap(res =>{
        if(res.token){
          localStorage.setItem('token', res.token);
        }
      })
    );
  }
}
