import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Curso, CursosService } from '../../../services/cursos.service';

@Component({
  selector: 'app-cursos',
  imports: [CommonModule, FormsModule],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursosComponent implements OnInit{
  constructor(private cursoService: CursosService){}

  ngOnInit(): void {
    this.cargarCurso();
  }

  cursos: Curso[] = [];
  curso: Curso = { id_curso: '', nombre: '', lugar: '', detalle: '', url_img: '', fecha_expedicion: new Date('')}

  guardarCurso(){
  if(this.curso.id){
    this.cursoService.update(this.curso.id, this.curso)
    .subscribe(() =>{
      console.log('El id es: ', this.curso.id);
      this.cargarCurso();
      this.closeModal();
    })
  }else{
    this.cursoService.create(this.curso)
    .subscribe(() => {
      this.cargarCurso();
      this.closeModal();
    })
  }
}

eliminarCurso(id: number){
  if(confirm('¿Eliminar este Curso?')){
    this.cursoService.delete(id)
    .subscribe(() => this.cargarCurso());
  }
}

cargarCurso(){
  this.cursoService.getAll().subscribe(cursos => this.cursos = cursos);
}

isModalOpen = false;

openModal(curso?: Curso){
  if(curso){
    this.curso = {...curso};
  }else{
    this.curso = {id_curso: '', nombre: '', lugar: '', detalle: '', url_img: '', fecha_expedicion: new Date('')}
  }
  this.isModalOpen = true;
}

closeModal(){
  this.isModalOpen = false;
}

}
