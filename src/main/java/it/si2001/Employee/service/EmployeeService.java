package it.si2001.Employee.service;

import it.si2001.Employee.model.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {

    void saveEmployee(Employee employee);

    List<Employee> getAllEmployee();

//    Employee findEmployee(int id);

    void deleteEmployee(Employee employee);

    Optional<Employee> findById(Integer id);

    List<Employee> search(String searchParam);

    boolean isExist(Employee employee);

//    void updateEmployee(Employee currentEmployee);

    void deleteAllEmployee();
}
