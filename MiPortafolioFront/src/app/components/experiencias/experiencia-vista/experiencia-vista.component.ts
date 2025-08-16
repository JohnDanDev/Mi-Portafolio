import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Experiencia, ExperienciasService } from '../../../services/experiencias.service';

@Component({
  selector: 'app-experiencia-vista',
  imports: [CommonModule],
  templateUrl: './experiencia-vista.component.html',
  styleUrl: './experiencia-vista.component.css'
})
export class ExperienciaVistaComponent implements OnInit{
  
  experiencias: Experiencia[] = [];
  experiencia: Experiencia = {titulo:'', lugar:'', detalle:'', periodoInicio: new Date(''), periodoFinal: new Date('') };
  
  constructor(private experienciaService: ExperienciasService){}
  ngOnInit(): void {
    this.obtenerExperiencia();
  }

  obtenerExperiencia(){
    this.experienciaService.getAll().subscribe((experiencias) =>{
      this.experiencias = experiencias;
      this.experiencia = {titulo:'', lugar:'', detalle:'', periodoInicio: new Date(''), periodoFinal: new Date('')}
    })
  }
  
}
