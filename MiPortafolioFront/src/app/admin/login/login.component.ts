import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  credentials = {usuario: '', password: ''}
  error='';
  constructor(private authService: AuthService, private router: Router){}

  

  Submit(){
    this.authService.login(this.credentials).subscribe({
      next: ()=>this.router.navigate(['/cursos']),
      error:()=>this.error='Usuario o constraseña incorrectos'
    });
  }

}
