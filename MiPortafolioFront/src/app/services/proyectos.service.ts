import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Proyecto{
  id?: number;
  nombre: string;
  descripcion: string;
  link: string;
}


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private apiUrl = 'http://127.0.0.1:8000/api/proyectos';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<Proyecto[]>(this.apiUrl);
  }

  get(id: number): Observable<any>{
    return this.http.get<Proyecto>(`${this.apiUrl}/${id}`);
  }

  create(proyecto: Proyecto): Observable<Proyecto>{
    return this.http.post<Proyecto>(this.apiUrl, proyecto);
  }

  update(id:number, proyecto:Proyecto): Observable<any>{
    console.log('Encontre el id' + id);
    return this.http.put<Proyecto>(`${this.apiUrl}/${id}`, proyecto);
  }

  delete(id: number): Observable<void>{
    console.log(id);
    console.log(`${this.apiUrl}/${id}`)
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}