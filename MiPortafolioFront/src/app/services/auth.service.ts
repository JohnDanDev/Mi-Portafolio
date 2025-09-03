import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/api/login';
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient){
    this.loggedIn.next(!!localStorage.getItem('token'));
  }

  //Metodo para hacer login
  login(credential:{usuario: string, password: string}): Observable<any>{
    return this.http.post<{token: string}>(this.apiUrl, credential).pipe(
      tap(response =>{
        localStorage.setItem('token', response.token);
        this.loggedIn.next(true);
      })
    );
  }
  
  logout(): void{
    localStorage.removeItem('token');
    this.loggedIn.next(false);
  }

  //Saber si esta logueado
  isLoggedIn(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  //Obtener token
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
