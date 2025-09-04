import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario: string = '';
  password: string = '';

  constructor(private auth: AuthService, private router: Router){}

  onSubmit(){
    this.auth.login({usuario: this.usuario, password: this.password}).subscribe({
      next:() => this.router.navigate(['/principal']),
      error: () => alert('Credenciales invalidas')
    });
  }
}
