import { Component, OnInit } from '@angular/core';
import {CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'app-principal',
  imports: [CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent{
//[x: string]: any;
  nombre: string = 'Juan Daniel González Reyes';

  titulo: string = 'Pasante en Ingeniería en Computación | Desarrollador de Software';

  perfil: string = `Ingeniería en Computación con más de 3 años de experiencia en desarrollo de software. 
  Especializado en tecnologías web como Angular, Laravel y Spring Boot. Fuerte enfoque en el diseño de soluciones
  escalables, el desarrollo de APIs RESTful y la implementación de buenas prácticas de programación.
  Destacado por la capacidad de trabajo en equipo, resolución de problemas y compromiso con la mejora continua.
  Interesado en participar en proyectos innovadores que aporten valor a la sociedad mediante la tecnología.`;

  tituloFormacion: string ='Formación';
  formacion: string = `Universidad Autónoma del Estado de México
  <br>Facultad de Ingeniería
  <br>Ingeniería en Computación
  <br>Desarrollo de Software de Aplicación
  <br>2015-2023`

  tituloBlandas: string = 'Habilidades Blandas'

  blandas: string[] = ['Organizado', 'Trabajo en equipo', 'Responsable', 'Iniciativa', 'Creativo', 'Aprendizaje Constante', 'Resolución de Problemas'];

  tituloTecnicas: string = 'Habilidades Técnicas';

  tituloBackEnd: string = 'BackEnd';
  tecnicasBackEnd: string[] = ['Java', 'Laravel/PHP', 'Python','RestFul APIs'];

  tituloFrontEnd: string = 'FrontEnd';
  tecnicasFronEnd: string[] = ['HTML', 'CSS','JavaScript', 'Angular', 'Vue', 'Bootstrap'];

  tituloBasesDatos: string = 'Bases de Datos';
  basesDeDatos: string[] = ['MySQL', 'PostgreSQL', 'SQL Server', 'Oracle SQL'];

  tituloHerramientas: string = 'Herramientas';
  herramientas: string[] = ['Git/GitHub', 'Postman', 'SCRUM','Linux','Office 365'];
}
