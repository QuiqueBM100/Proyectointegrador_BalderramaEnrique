import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})


export class PersonaService {
  URL = 'https://backendlebb.herokuapp.com/personas/';

  constructor(private http: HttpClient, private activatedRouter: ActivatedRoute) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+ 'traer/perfil');
  }

  public detail(id: number): Observable<persona>{
    return this.http.get<persona>(this.URL + `detail/${id}`);
  }

  public save(persona: persona): Observable<any>{
    return this.http.post<any>(this.URL + 'create', persona);
  }

  public update(persona: persona): Observable<any>{
    return this.http.put<any>(this.URL + 'update', persona);
  }
}
