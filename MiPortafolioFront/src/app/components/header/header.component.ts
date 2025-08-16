import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'MiPortafolioFront';
  principal = 'Principal';
  proyectos = 'Proyectos';
  experiencias = 'Experiencia';
  experienciaVista = 'ExperienciasVista';
  proyectoVista = 'ProyectoVista';

  menuAbierto = false;

  toggleMenu(){
    this.menuAbierto =!this.menuAbierto;
  }

  cerrarMenu(){
    this.menuAbierto = false;
  }
}
