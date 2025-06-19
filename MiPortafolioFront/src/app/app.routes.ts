import { Routes } from '@angular/router';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { PrincipalComponent } from './components/principal/principal.component';

export const routes: Routes = [
    { path: 'principal', component: PrincipalComponent},
    { path: 'proyectos', component: ProyectoComponent}
];
