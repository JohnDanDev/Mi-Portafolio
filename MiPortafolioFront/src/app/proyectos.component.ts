import { Component, OnInit } from '@angular/core';
import { ProyectosService } from './services/proyectos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-proyectos',
  templateUrl: 'proyectos.component.html',
  styleUrl: './proyectos.component.css',
  standalone: true, // Este componente es standalone
  imports: [FormsModule,CommonModule],
})
export class ProyectosComponent implements OnInit{

  proyectos: any[] = [];
  nuevoProyecto = {nombre: '', descripcion: '', link: ''};

  constructor(private proyectosService: ProyectosService){}

  ngOnInit(): void {
    this.obtenerProyectos();
  }

  obtenerProyectos(){
    this.proyectosService.getProyectos().subscribe(data=>{
      this.proyectos=data;
    });
  }

  agregarProyectos() {
    if (!this.nuevoProyecto.nombre || !this.nuevoProyecto.descripcion) {
      alert('Todos los campos son obligatorios');
      return;
    }
    this.proyectosService.createProyectos(this.nuevoProyecto).subscribe(() => {
      this.obtenerProyectos(); // Recargar proyectos
      this.nuevoProyecto = { nombre: '', descripcion: '', link:'' }; // Limpiar formulario
    });
  }

  eliminarProyectos(id: number){
    this.proyectosService.deleteProyectos(id).subscribe(()=>{
      console.log('Proyecto Eliminado');
      this.obtenerProyectos();
    }
  );
  }

}
