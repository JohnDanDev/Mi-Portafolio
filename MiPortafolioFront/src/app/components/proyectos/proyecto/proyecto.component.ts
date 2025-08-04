import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProyectosService, Proyecto } from '../../../services/proyectos.service';
import { CommonModule } from '@angular/common';
import { ProyectoModalComponent } from '../proyecto-modal/proyecto-modal.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-proyecto',
  imports: [CommonModule, FormsModule],
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.css'
})
export class ProyectoComponent implements OnInit{

  @Input() proyectoSeleccionado: Proyecto = {nombre: '', descripcion: '', link: ''};
  @Output() proyectoGuardado = new EventEmitter<void>();

  proyectos: Proyecto[] = [];
  proyectoSeleccionados: Proyecto = { nombre:'', descripcion:'', link:'' };

  constructor(private proyectoService: ProyectosService){}

  ngOnInit(): void {
    this.obtenerProyecto();
  }

  guardarProyecto(){
    if(this.proyectoSeleccionado.id){
      console.log(this.proyectoSeleccionado);
      this.proyectoService
      .update(this.proyectoSeleccionado.id, this.proyectoSeleccionado)
      .subscribe(() => {
        this.proyectoGuardado.emit();
      });
    }else{
      this.proyectoService.create(this.proyectoSeleccionado).subscribe(() => {
        this.proyectoGuardado.emit();
        this.proyectoSeleccionado = {nombre:'', descripcion: '', link:''}
      });
    }
  }

  abrirModalCrear(){
    this.proyectoSeleccionados = {nombre:'', descripcion:'', link:''};
  }

  obtenerProyecto(){
    this.proyectoService.getAll().subscribe((proyectos) => { 
      this.proyectos = proyectos;
      this.proyectoSeleccionados = {nombre:'', descripcion:'', link:''};
    });
  }

  editarProyecto(proyecto: Proyecto){
    this.proyectoSeleccionados = { ...proyecto};
  }

  eliminarProyecto(id: number){
    this.proyectoService.delete(id).subscribe(() => {
      console.log('Proyecto Eliminado');
      this.obtenerProyecto();
    });
  }

  cancelarEdicion(){
    this.proyectoSeleccionados= {nombre: '', descripcion: '', link: ''};
  }

  //Abrir y Cerrar modal o ventana emergente
  isModalOpen = false;

  openModal(){
    this.isModalOpen = true;
  }

  closeModal(){
    this.isModalOpen = false;
  }

}
