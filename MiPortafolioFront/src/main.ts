import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ProyectosComponent } from './app/proyectos.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(ProyectosComponent, {
  providers:[provideHttpClient()]
});
