package it.si2001.Employee.service;

import it.si2001.Employee.model.MaritalStatus;
import it.si2001.Employee.model.Skill;

import java.util.List;
import java.util.Optional;

public interface SkillService {

    List<Skill> getAllSkills();
    Optional<Skill> findById(Integer id);
}
