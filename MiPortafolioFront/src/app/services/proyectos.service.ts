import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private apiUrl = 'http://127.0.0.1:8000/api/proyectos';

  constructor(private http: HttpClient) { }

  getProyectos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createProyectos(proyectos: any): Observable<any>{
    return this.http.post(this.apiUrl, proyectos);
  }

  updateProyectos(id:number, proyectos:any): Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`, proyectos);
  }

  deleteProyectos(id: number): Observable<any>{
    console.log(id);
    console.log(`${this.apiUrl}/${id}`)
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}