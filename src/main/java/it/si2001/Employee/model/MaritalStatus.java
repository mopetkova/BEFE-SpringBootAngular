package it.si2001.Employee.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table( name = "marital_status")
public class MaritalStatus implements Serializable {


    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer maritalStatusId;
    private String status;


    // Getter and Setter


    public Integer getMaritalStatusId() {
        return maritalStatusId;
    }

    public void setMaritalStatusId(Integer maritalStatusId) {
        this.maritalStatusId = maritalStatusId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

}
