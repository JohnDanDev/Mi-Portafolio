import { Routes } from '@angular/router';
import { ProyectoComponent } from './components/proyectos/proyecto/proyecto.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ProyectoVistaComponent } from './components/proyectos/proyecto-vista/proyecto-vista.component';

export const routes: Routes = [
    { path: 'principal', component: PrincipalComponent},
    { path: 'proyectos', component: ProyectoComponent},
    { path: 'proyectoVista', component: ProyectoVistaComponent}
];
