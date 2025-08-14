import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Experiencia{
  id?: number;
  titulo: string;
  lugar: string;
  detalle: string;
  periodoInicio: Date;
  periodoFinal: Date;
}

@Injectable({
  providedIn: 'root'
})

export class ExperienciasService {

  private apiUrl = 'http://127.0.0.1:8000/api/experiencias';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<Experiencia[]>(this.apiUrl);
  }

  get(id: number): Observable<any>{
    return this.http.get<Experiencia>(`${this.apiUrl}/${id}`);
  }

  create(experiencia: Experiencia): Observable<Experiencia>{
    return this.http.post<Experiencia>(this.apiUrl, experiencia);
  }

  update(id: number, experiencia:Experiencia): Observable<any>{
    return this.http.put<Experiencia>(`${this.apiUrl}/${id}`, experiencia);
  }

  delete(id: number): Observable<any>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
