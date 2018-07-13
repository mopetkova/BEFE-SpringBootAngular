package it.si2001.Employee.model;


import javax.persistence.*;

@Entity
@Table( name = "skill")
public class Skill {

    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer skillId;
    private String name;


    // Getter and Setter

    public Integer getSkillId() {
        return skillId;
    }

    public void setSkillId(Integer skillId) {
        this.skillId = skillId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}
