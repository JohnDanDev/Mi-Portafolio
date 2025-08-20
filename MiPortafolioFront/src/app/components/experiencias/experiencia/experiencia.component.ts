import { Component, OnInit } from '@angular/core';
import { ExperienciasService, Experiencia } from '../../../services/experiencias.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-experiencia',
  imports: [CommonModule, FormsModule],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent implements OnInit{

constructor(private experienciaService: ExperienciasService){}

ngOnInit(): void {
  this.cargarExperiencia();
}

experiencias: Experiencia[] = [];

experiencia: Experiencia = {titulo: '', lugar: '', detalle: '', periodoInicio: new Date(''), periodoFinal: new Date('')}

guardarExperiencia(){
  if(this.experiencia.id){
    this.experienciaService.update(this.experiencia.id, this.experiencia)
    .subscribe(() =>{
      console.log('El id es: ', this.experiencia.id);
      this.cargarExperiencia();
      this.closeModal();
    })
  }else{
    this.experienciaService.create(this.experiencia)
    .subscribe(() => {
      this.cargarExperiencia();
      this.closeModal();
    })
  }
}

eliminarExperiencia(id: number){
  if(confirm('¿Eliminar esta Experiencia?')){
    this.experienciaService.delete(id)
    .subscribe(() => this.cargarExperiencia());
  }
}

cargarExperiencia(){
  this.experienciaService.getAll().subscribe(experiencias => this.experiencias = experiencias);
}

isModalOpen = false;

openModal(experiencia?: Experiencia){
  if(experiencia){
    this.experiencia = {...experiencia};
  }else{
    this.experiencia = {titulo: '', lugar:'', detalle: '', periodoInicio: new Date(''), periodoFinal: new Date('')}
  }
  this.isModalOpen = true;
}

closeModal(){
  this.isModalOpen = false;
}
}
