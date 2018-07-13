import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EmployeeComponent} from "./employee/employee.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {EmployeeService} from "./employee.service";
import {CreateComponent} from "./employee-create/employee-new.component";
import {MaritalStatusService} from "./maritalStatus.service";
import {UpdateComponent} from "./employee-update/employee-edit.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SkillService} from "./skill.service";
import {DetailsComponent} from "./employee-details/employee-details.component";
import {EmployeeFilterPipe} from "./employee-filter";
import {AppRoutingModule} from "./app-routing.module";



@NgModule({
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],

  providers: [EmployeeService, MaritalStatusService, SkillService],

  bootstrap: [AppComponent],

  declarations: [
    AppComponent,
    EmployeeComponent,
    CreateComponent,
    UpdateComponent,
    DetailsComponent,
    EmployeeFilterPipe,
  ]
})

export class AppModule {
}

// platformBrowserDynamic().bootstrapModule(AppRoutingModule);
