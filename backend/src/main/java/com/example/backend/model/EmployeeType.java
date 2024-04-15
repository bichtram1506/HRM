package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "employee_types")
public class EmployeeType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    
    private String code;
    
    private String description;

    // Constructors, getters, and setters...

    public EmployeeType() {
    }

    public EmployeeType(String name, String code, String description) {
        this.name = name;
        this.code = code;
        this.description = description;
    }
}
