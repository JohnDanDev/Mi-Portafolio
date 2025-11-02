import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  administradores:any = {};
  constructor(private auth:AuthService, private router:Router){}

  login(){
    this.auth.login(this.administradores).subscribe(res:any)=>{
      this.auth.saveToken(res.token);
      this.router.navigate(['/cursos']);
    }
  }
}
