import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {EmployeeComponent} from "./employee/employee.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {EmployeeService} from "./employee.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DetailsComponent} from "./employee-details/employee-details.component";
import { RootModule, UIRouterModule, Transition } from '@uirouter/angular';
import {UpdateComponent} from "./employee-update/employee-edit.component";
import {CreateComponent} from "./employee-create/employee-new.component";


/** States */
const rootModule: RootModule = {
  states: [
    {
      name: 'employees',
      url: '/employees',
      component: EmployeeComponent,
      resolve: [
        {
          token: "employees",
          deps: [EmployeeService],
          resolveFn: (employeeSvc: EmployeeService) => employeeSvc.getEmployees().toPromise()
        }
      ]
    },
    {
      name: 'details',
      url: '/details/:employeeId',
      component: DetailsComponent,
      resolve: [
        {
          token: "employee",
          deps: [Transition, EmployeeService],
          resolveFn: (trans: Transition, employeeSvc: EmployeeService) => employeeSvc.getEmployeeById(trans.params().employeeId).toPromise()
        }
      ]
    },
    {
      name: 'update',
      url: '/update/:employeeId',
      component: UpdateComponent,
      resolve: [
        {
          token: "employee",
          deps: [Transition, EmployeeService],
          resolveFn: (trans: Transition, employeeSvc: EmployeeService) => employeeSvc.getEmployeeById(trans.params().employeeId).toPromise()
        }
      ]
    },
    {
      name: 'create',
      url: '/create',
      component: CreateComponent
    },
    {
      name: 'delete',
      url: '/delete/:employeeId',
      component: EmployeeComponent,
      resolve: [
        {
          token: "employees",
          deps: [Transition, EmployeeService],
          resolveFn: (trans: Transition, employeeSvc: EmployeeService) => employeeSvc.deleteEmployeeByID(trans.params().employeeId).toPromise()
        },
        {
          token: "employees",
          deps: [EmployeeService],
          resolveFn: (employeeSvc: EmployeeService) => employeeSvc.getEmployees().toPromise()
        }
      ]
    },
  ],
  useHash: true
};

@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    ReactiveFormsModule, BrowserAnimationsModule,

    UIRouterModule.forRoot(rootModule)],
  exports: [UIRouterModule],
})


export class AppRoutingModule { }

// platformBrowserDynamic().bootstrapModule(AppRoutingModule);
