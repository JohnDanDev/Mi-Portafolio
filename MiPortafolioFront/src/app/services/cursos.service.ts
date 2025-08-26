import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Curso{
  id?: number;
  id_curso: string;
  nombre: string;
  lugar: string;
  detalle: string;
  url_img: string;
  fecha_expedicion: Date;
}

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private apiUrl = 'http://127.0.0.1:8000/api/cursos';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
      return this.http.get<Curso[]>(this.apiUrl);
    }
  
  get(id: number): Observable<any>{
      return this.http.get<Curso>(`${this.apiUrl}/${id}`);
    }

  create(curso: Curso): Observable<Curso>{
    return this.http.post<Curso>(this.apiUrl, curso);
    }

  update(id: number, curso: Curso): Observable<Curso>{
      console.log('Encontre el id' + id);
      return this.http.put<Curso>(`${this.apiUrl}/${id}`, curso);
    }

  delete(id: number): Observable<any>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
