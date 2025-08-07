import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProyectosService, Proyecto } from '../../../services/proyectos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-proyecto',
  imports: [CommonModule, FormsModule],
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.css'
})
export class ProyectoComponent implements OnInit{
 
  constructor(private proyectoService: ProyectosService){}

  ngOnInit(): void {
    this.cargarProyecto();
  }

  proyectos: Proyecto[] = []; //Lista de usuarios

  proyecto: Proyecto = {nombre: '', descripcion: '', link: ''}; //Modelo

  guardarProyecto(){
    if(this.proyecto.id){
      this.proyectoService.update(this.proyecto.id, this.proyecto)
      .subscribe(() => {
        this.cargarProyecto();
        this.closeModal();
      })
      } else {
        this.proyectoService.create(this.proyecto)
        .subscribe(() => {
          this.cargarProyecto();
          this.closeModal();
        })
      }
  }

  eliminarProyecto(id: number){
    if(confirm('¿Eliminar este proyecto?')){
      this.proyectoService.delete(id)
      .subscribe(() => this.cargarProyecto());
    }
  }

  cargarProyecto(){
    this.proyectoService.getAll().subscribe(proyectos => this.proyectos = proyectos);
  }

    //Abrir y Cerrar modal o ventana emergente
  isModalOpen = false;

  openModal(proyecto?: Proyecto){
    if(proyecto){
      this.proyecto = { ...proyecto};
    } else {
      this.proyecto = { nombre: '', descripcion: '', link: ''};
    }
    this.isModalOpen = true;
  }

  closeModal(){
    this.isModalOpen = false;
  }
  }

