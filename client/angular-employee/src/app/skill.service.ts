import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {Skill} from './Skill';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class SkillService {

  private url = '/api';

  constructor(
    private http: HttpClient
  ) { }

  /** GET skills from the server */
  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.url+'/employee/skills')
      .pipe(
        catchError( (err) => {
          return of(err as Skill[]);
        })
      );
  }

  /** GET skills by id */
  getSkillById(id: number): Observable<Skill> {
    return this.http.get<Skill>(this.url + '/employee/skill/' + id)
      .pipe(
        catchError((err) => {
          // this.notificationService.error('Errore', 'Utente non trovato ');
          return of(err as Skill);
        })
      );
  }

}
