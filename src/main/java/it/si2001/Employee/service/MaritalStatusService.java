package it.si2001.Employee.service;

import it.si2001.Employee.model.MaritalStatus;

import java.util.List;
import java.util.Optional;

public interface MaritalStatusService {

    List<MaritalStatus> getAllMaritalStatus();

    Optional<MaritalStatus> findById(Integer id);

//    MaritalStatus findMaritalStatus(int id);
//    MaritalStatus findMaritalStatus(String name);

}
