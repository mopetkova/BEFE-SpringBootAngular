import {Pipe, PipeTransform} from '@angular/core';
import {Employee} from "./employee";

@Pipe({name: 'employeeFilter'})
export class EmployeeFilterPipe implements PipeTransform {


  transform(employees: Employee[], searchValue?: string): Employee[] {

    return employees.filter(
      employee => {

        searchValue = searchValue.toLowerCase();

        if (searchValue === '') {
          return true;
        }

        if (employee.name.toLowerCase().indexOf(searchValue) > -1
          || employee.surname.toLowerCase().indexOf(searchValue) > -1
          || employee.country.toLowerCase().indexOf(searchValue) > -1) {
          return true;
        } else {
          return false;
        }
      });
  }

}
