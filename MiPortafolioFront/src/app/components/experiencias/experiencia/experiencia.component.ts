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

}
