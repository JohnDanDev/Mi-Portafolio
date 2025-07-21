import { Component, OnInit } from '@angular/core';
import { ProyectosService, Proyecto } from '../../../services/proyectos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyecto-vista',
  imports: [CommonModule],
  templateUrl: './proyecto-vista.component.html',
  styleUrl: './proyecto-vista.component.css'
})
export class ProyectoVistaComponent implements OnInit{
  
  proyectos: Proyecto[] = [];

  constructor(private proyectoService: ProyectosService){}
  ngOnInit(): void {
    
  }

}
