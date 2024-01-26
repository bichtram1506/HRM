package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    
    private String sex;
    
    private String marital_status;
    
    private String hometown;
    
    private String avatar;
    
    private String email;
    
    private String status;
    
    // Foreign keys
    private Long employee_type_id;
    private Long level_id;
    private Long department_id;
    private Long position_id;
    private Long qualification_id;
    private Long specialization_id;

    // Constructors, getters, and setters...

    public Employee() {
    }

    public Employee(String name, String sex, String marital_status, String hometown, String avatar, String email, String status,
                    Long employee_type_id, Long level_id, Long department_id, Long position_id, Long qualification_id, Long specialization_id) {
        this.name = name;
        this.sex = sex;
        this.marital_status = marital_status;
        this.hometown = hometown;
        this.avatar = avatar;
        this.email = email;
        this.status = status;
        this.employee_type_id = employee_type_id;
        this.level_id = level_id;
        this.department_id = department_id;
        this.position_id = position_id;
        this.qualification_id = qualification_id;
        this.specialization_id = specialization_id;
    }

    // Getters and setters...

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getMarital_status() {
        return marital_status;
    }

    public void setMarital_status(String marital_status) {
        this.marital_status = marital_status;
    }
    
    public String getHometown() {
        return hometown;
    }

    public void setHometown(String hometown) {
        this.hometown = hometown;
    }
    
    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }
    
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    
    public Long getEmployee_type_id() {
        return employee_type_id;
    }

    public void setEmployee_type_id(Long employee_type_id) {
        this.employee_type_id = employee_type_id;
    }
    
    public Long getLevel_id() {
        return level_id;
    }

    public void setLevel_id(Long level_id) {
        this.level_id = level_id;
    }
    
    public Long getDepartment_id() {
        return department_id;
    }

    public void setDepartment_id(Long department_id) {
        this.department_id = department_id;
    }
    
    public Long getPosition_id() {
        return position_id;
    }

    public void setPosition_id(Long position_id) {
        this.position_id = position_id;
    }
    
    public Long getQualification_id() {
        return qualification_id;
    }

    public void setQualification_id(Long qualification_id) {
        this.qualification_id = qualification_id;
    }
    
    public Long getSpecialization_id() {
        return specialization_id;
    }

    public void setSpecialization_id(Long specialization_id) {
        this.specialization_id = specialization_id;
    }
}