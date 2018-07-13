import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {MaritalStatus} from "./maritalStatus";



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

// @Injectable({providedIn: 'root'})
@Injectable()

export class MaritalStatusService {

  private url = '/api';  // URL to web api

  constructor(
    private http: HttpClient) {}

  /** GET ms from the server -ok */
  getMaritalStatues(): Observable<MaritalStatus[]> {
    console.log("MS-service > getMaritalStatus()");
    return this.http.get<MaritalStatus[]>(this.url+"/employee/maritalStatus")
      .pipe(
        catchError( (err) => {
          return of(err as MaritalStatus[]);
        })
      );
  };


  /** GET employee by id */
  getMaritalStatusById(id: number): Observable<MaritalStatus> {
    return this.http.get<MaritalStatus>(this.url + '/employee/maritalStatus/' + id)
      .pipe(
        catchError((err) => {
          // this.notificationService.error('Errore', 'Utente non trovato ');
          return of(err as MaritalStatus);
        })
      );
  }
}

