package it.si2001.Employee.repository;

import it.si2001.Employee.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository("employeeRepository")
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

//    void updateEmployee(Employee currentEmployee);


//    List<Employee> search(String searchParam);

//    Employee findEmployee(int id);

}
