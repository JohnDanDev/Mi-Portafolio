import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Curso, CursosService } from '../../../services/cursos.service';

@Component({
  selector: 'app-curso-vista',
  imports: [CommonModule],
  templateUrl: './curso-vista.component.html',
  styleUrl: './curso-vista.component.css'
})
export class CursoVistaComponent implements OnInit{

  cursos: Curso[] = [];
  curso: Curso = {
    id_curso: '',
    nombre: '',
    lugar: '',
    detalle: '',
    url_img: '',
    fecha_expedicion: new Date('')
  }

  constructor(private cursoService: CursosService){}
  ngOnInit(): void{
    this.obtenerCurso();
  }

  obtenerCurso(){
    this.cursoService.getAll().subscribe((cursos)=>{
      this.cursos = cursos;
      this.curso = {id_curso: '',
    nombre: '',
    lugar: '',
    detalle: '',
    url_img: '',
    fecha_expedicion: new Date('')}
    });
  }
}
