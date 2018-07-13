package it.si2001.Employee.repository;

import it.si2001.Employee.model.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("skillRepository")
public interface SkillRepository  extends JpaRepository<Skill, Integer> {
//    Skill findBySkill(String skill);
}
