import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { ProyectoComponent } from './app/components/proyecto/proyecto.component';

bootstrapApplication(ProyectoComponent, {
  providers:[provideHttpClient()]
});
