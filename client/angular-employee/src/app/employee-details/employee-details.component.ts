import {Component, Input, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MaritalStatusService} from "../maritalStatus.service";
import {MaritalStatus} from "../maritalStatus";


@Component({
  selector: 'app-edit',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class DetailsComponent implements OnInit {
  title = "dettaaaillsss";
  // employee: Employee = new Employee();

  maritalStatus: MaritalStatus = new MaritalStatus();

  constructor() {}

  @Input() employee: Employee;

  ngOnInit() {
    console.log("Employee cercato ")
    // console.log(this.details)
  }

  // getEmployeeById(employeeId): void {
  //   this.employeeService.getEmployeeById(employeeId)
  //     .subscribe(employee => this.employee = employee);
  // }

}
