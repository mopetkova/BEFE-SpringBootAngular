package it.si2001.Employee.repository;

import it.si2001.Employee.model.MaritalStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("maritalStatusRepository")
public interface MaritalStatusRepository  extends JpaRepository<MaritalStatus, Integer> {
}
