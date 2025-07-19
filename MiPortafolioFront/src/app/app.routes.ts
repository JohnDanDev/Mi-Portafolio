import { Routes } from '@angular/router';
import { ProyectoComponent } from './components/proyectos/proyecto/proyecto.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ProyectoVistaComponent } from './components/proyectos/proyecto-vista/proyecto-vista.component';
import { ExperienciaVistaComponent } from './components/experiencias/experiencia-vista/experiencia-vista.component';

export const routes: Routes = [
    { path: 'principal', component: PrincipalComponent},
    { path: 'proyectos', component: ProyectoComponent},
    { path: 'proyectoVista', component: ProyectoVistaComponent},
    { path: 'experienciaVista', component: ExperienciaVistaComponent}
];
