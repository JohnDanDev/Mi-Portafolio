import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { Proyecto, ProyectosService } from '../../services/proyectos.service';
import { FormsModule } from '@angular/forms';
import { Modal } from 'bootstrap';
import { Output, EventEmitter } from '@angular/core';
import { ProyectoComponent } from '../proyecto/proyecto.component';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-proyecto-modal',
  imports: [FormsModule],
  templateUrl: './proyecto-modal.component.html',
  styleUrl: './proyecto-modal.component.css'
})
export class ProyectoModalComponent implements OnInit {

  @Input() proyectoSeleccionado: Proyecto = {nombre: '', descripcion: '', link: ''};
  @Output() proyectoGuardado = new EventEmitter<void>();


  constructor(private proyectoService: ProyectosService){}

  ngOnInit(): void {}


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

  cerrarModal(){
    const modalElement = document.getElementById('proyectoModal')!;
    const modal = new Modal(modalElement);
    modal.hide();
  }

}
