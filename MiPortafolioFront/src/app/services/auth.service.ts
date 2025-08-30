import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getUserRole(): string{
    return localStorage.getItem('role') || 'user';
  }

  isAdmin(): boolean {
    return this.getUserRole() === 'admin';
  }
}
