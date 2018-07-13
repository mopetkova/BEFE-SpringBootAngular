package it.si2001.Employee.service;

import it.si2001.Employee.model.Skill;
import it.si2001.Employee.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service("skillService")
public class SkillServiceImpl implements SkillService {

    @Autowired
    SkillRepository skillRepository;

    @Override
    public List<Skill> getAllSkills() {
        return skillRepository.findAll();
    }

    @Override
    public Optional<Skill> findById(Integer id) {
        return skillRepository.findById(id);
    }
}
