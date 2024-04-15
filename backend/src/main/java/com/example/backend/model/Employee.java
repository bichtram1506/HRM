package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
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

    @ManyToOne
    @JoinColumn(name = "employee_type_id", referencedColumnName = "id", insertable = false, updatable = false)
    private EmployeeType employeeType;

    @ManyToOne
    @JoinColumn(name = "level_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Level level;

    @ManyToOne
    @JoinColumn(name = "department_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Department department;
    
    @ManyToOne
    @JoinColumn(name = "position_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Position position;

    @ManyToOne
    @JoinColumn(name = "qualification_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Qualification qualification;

    @ManyToOne
    @JoinColumn(name = "specialization_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Specialization specialization;

    // Additional getter methods for related entity details
    public String getEmployeeTypeName() {
        return employeeType != null ? employeeType.getName() : null;
    }

    public String getLevelName() {
        return level != null ? level.getName() : null;
    }

    public String getDepartmentName() {
        return department != null ? department.getName() : null;
    }

    public String getPositionName() {
        return position != null ? position.getName() : null;
    }

    public String getQualificationName() {
        return qualification != null ? qualification.getName() : null;
    }

    public String getSpecializationName() {
        return specialization != null ? specialization.getName() : null;
    }

    // Constructors
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
}
