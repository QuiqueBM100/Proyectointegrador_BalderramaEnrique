import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  expURL = 'https://backendlebb.herokuapp.com/explab/';

  constructor(private httpClient: HttpClient, private activatedRouter: ActivatedRoute) {}

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + `detail/${id}`);
  }

  public save(expe: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.expURL +'create', expe);
  }

  public update(expe: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.expURL + `update`, expe);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
