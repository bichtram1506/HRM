package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "positions")
public class Position {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    
    private String code;
    
    private double daily_wage;
    
    private String description; // Thêm cột description

    // Constructors, getters, and setters...

    public Position() {
    }

    public Position(String name, String code, double daily_wage, String description) { // Thêm description vào constructor
        this.name = name;
        this.code = code;
        this.daily_wage = daily_wage;
        this.description = description;
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
    
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public double getDaily_wage() {
        return daily_wage;
    }

    public void setDaily_wage(double daily_wage) {
        this.daily_wage = daily_wage;
    }
    
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}