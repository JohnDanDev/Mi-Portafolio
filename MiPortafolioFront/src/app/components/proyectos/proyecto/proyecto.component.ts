import { Component, OnInit } from '@angular/core';
import { ProyectosService, Proyecto } from '../../../services/proyectos.service';
import { CommonModule } from '@angular/common';
import { ProyectoModalComponent } from '../proyecto-modal/proyecto-modal.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-proyecto',
  imports: [CommonModule, ProyectoModalComponent],
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.css'
})
export class ProyectoComponent implements OnInit{

  proyectos: Proyecto[] = [];
  proyectoSeleccionado: Proyecto = { nombre:'', descripcion:'', link:'' };

  constructor(private proyectoService: ProyectosService){}

  ngOnInit(): void {
    this.obtenerProyecto();
  }

  abrirModalCrear(){
    this.proyectoSeleccionado = {nombre:'', descripcion:'', link:''};
  }

  obtenerProyecto(){
    this.proyectoService.getAll().subscribe((proyectos) => { 
      this.proyectos = proyectos;
      this.proyectoSeleccionado = {nombre:'', descripcion:'', link:''};
    });
  }

  editarProyecto(proyecto: Proyecto){
    this.proyectoSeleccionado = { ...proyecto};
  }

  eliminarProyecto(id: number){
    this.proyectoService.delete(id).subscribe(() => {
      console.log('Proyecto Eliminado');
      this.obtenerProyecto();
    });
  }

  cancelarEdicion(){
    this.proyectoSeleccionado = {nombre: '', descripcion: '', link: ''};
  }

}
