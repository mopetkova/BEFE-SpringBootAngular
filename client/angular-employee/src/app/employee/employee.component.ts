import {Component, Input, OnInit} from '@angular/core';
import {Employee} from "../employee";


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})


export class EmployeeComponent implements OnInit {
  title = 'All Employee';
  message = '';

  @Input() employees: Employee[] = [];


  constructor() {}
  ngOnInit() {
  }

  //url='/'
  // getEmployees(): void {
  //   this.employeeService.getEmployees()
  //     .subscribe(
  //       employees => this.employees = employees,
  //       error => this.message='Errore visualizzazione Employees'
  //     );
  // }


  // url='delete/:id'
  // delete(employeesID: number): void {
  //   console.log("id passato " + employeesID)
  //   this.employeeService.deleteEmployeeByID(employeesID)
  //     .subscribe(
  //       data => this.message='Employee eliminato con sucesso',
  //       error => this.message='Errore durante eliminazioe Employee'
  //     );
  //   this.getEmployees();
  //
  // }

}
