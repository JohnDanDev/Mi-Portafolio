import { bootstrapApplication } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes, routesAdmin } from './app/app.routes';
import { AuthInterceptor } from './app/interceptors/auth.interceptor';

bootstrapApplication(AppComponent, {
  providers:[
    provideRouter(routes),
    provideHttpClient(withInterceptors([AuthInterceptor])),
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
});
