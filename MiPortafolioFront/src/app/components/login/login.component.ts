import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [CommonModule,
    FormsModule]
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.error = '';
    this.auth.login(this.email, this.password).subscribe({
      next: _ => this.router.navigate(['/cursos']),
      error: err => {
        // Laravel devuelve errores en formato { errors: { email: [...] } } o message
        this.error = err?.error?.errors ? Object.values(err.error.errors).flat().join(' ') : err?.error?.message || 'Error de login';
      }
    });
  }
}

