import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface AuthResponse{
  token: string;
  user: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient){}

  login(email: string, password: string):Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, {email, password}).pipe(
      tap(res =>{
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));
      }));
  }

  register(name: string, email: string, password: string, password_confirmation: string) {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, { name, email, password, password_confirmation })
      .pipe(tap(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
      }));
  }

  logout() {
    const token = this.getToken();
    return this.http.post(`${this.apiUrl}/logout`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    }).pipe(tap(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }));
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUser(): any {
    const u = localStorage.getItem('user');
    return u ? JSON.parse(u) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
