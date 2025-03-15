import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ProyectosComponent } from "./proyectos.component";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { provideHttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
    declarations: [],
    imports: [BrowserModule,ProyectosComponent,  FormsModule],
    providers: [provideHttpClient()],
})
export class AppModule{}