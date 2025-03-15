import { Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos.component';

export const routes: Routes = [
   /* {path:'', redirectTo: 'proyectos', pathMatch: 'full'},
    {path:'proyectos', component: ProyectosComponent}*/
    { path: 'proyecto', component: ProyectosComponent },
];
