package it.si2001.Employee.service;

import it.si2001.Employee.model.Employee;
import it.si2001.Employee.model.MaritalStatus;
import it.si2001.Employee.repository.MaritalStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service("maritalStatusService")
public class MaritalStatusServiceImpl implements MaritalStatusService {

    @Autowired
    MaritalStatusRepository maritalStatusRepository;



    @Override
    public List<MaritalStatus> getAllMaritalStatus() {

        return maritalStatusRepository.findAll();
    }

    @Override
    public Optional<MaritalStatus> findById(Integer id) {
        return maritalStatusRepository.findById(id);
    }
}
