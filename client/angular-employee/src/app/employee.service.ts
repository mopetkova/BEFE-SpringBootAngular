import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {Employee} from "./employee";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

// @Injectable({providedIn: 'root'})
@Injectable()

export class EmployeeService {

  private employeesUrl = '/api';  // URL to web api

  constructor( private http: HttpClient) {}

  /** GET employees from the server -ok url=/employee */
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl)
      .pipe(
        catchError((err) => {
          // this.notificationService.error('Errore', 'Utenti non trovati');
          return of(err as Employee[]);
        })
      );
  };

  /** POST new employee to server */
  saveEmployee(employee: Employee): Observable<Employee> {
    console.log("saveEmployee() "+employee.name);
    return this.http.post<Employee>(this.employeesUrl + '/employee', employee, httpOptions)
      .pipe(
        // tap(_ => this.notificationService.success('Utente inserito')),
        catchError((err) => {
          // this.notificationService.error('Errore', 'Utente non salvato ');
          return of(err as Employee);
        })
      );
  }


  /** GET employee by id */
  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.employeesUrl + '/employee/' + id)
      .pipe(
        catchError((err) => {
          // this.notificationService.error('Errore', 'Utente non trovato ');
          return of(err as Employee);
        })
      );
  }

  /** Delete employee by id */
  deleteEmployeeByID(id: number) {
    return this.http.delete(this.employeesUrl + '/employee/' + id)
      .pipe(
        // tap(_ => this.notificationService.success('Utente eliminato')),
        catchError((err) => {
          // this.notificationService.error('Errore', 'Utente non trovato ');
          return of(err);
        })
      );
  }

  // /** PUT update employee to server */
  // updateEmployee(employee: Employee) {
  //   console.log("EMPLOYEE-SERVICE update> E: sk:" +employee.skills[0].name);
  //   return this.http.put<Employee>(this.employeesUrl + '/employee/'+employee.employeeId, employee, httpOptions)
  //     .pipe(
  //       catchError((err) => {
  //           return of(err);
  //         }
  //       ));
  //
  // }
}
