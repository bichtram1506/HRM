package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "positions")
public class Position {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    
    private String code;
    
    private double daily_wage;
    
    private String description; 

    public Position() {
    }

    public Position(String name, String code, double daily_wage, String description) {
        this.name = name;
        this.code = code;
        this.daily_wage = daily_wage;
        this.description = description;
    }
}
