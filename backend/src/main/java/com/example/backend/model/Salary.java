package com.example.backend.model;

import java.sql.Date;

import jakarta.persistence.Column;
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
@Table(name = "salary")
public class Salary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;

    @Column(name = "working_days")
    private Integer workingDays;

    @Column(name = "pay_date")
    private Date payDate;

    private Integer advance;

    private Integer allowance;

    @Column(name = "monthlySalary")
    private Integer monthlySalary;
    
    public Salary() {
    }

    public Salary(Employee employee, Integer workingDays, Date payDate, Integer advance, Integer allowance, Integer monthlySalary) {
        this.employee = employee;
        this.workingDays = workingDays;
        this.payDate = payDate;
        this.advance = advance;
        this.allowance = allowance;
        this.monthlySalary = monthlySalary;
    }
}
