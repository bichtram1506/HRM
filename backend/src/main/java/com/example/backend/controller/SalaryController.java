package com.example.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Salary;
import com.example.backend.repository.SalaryRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/salaries")
public class SalaryController {

    private final SalaryRepository salaryRepository;

    public SalaryController(SalaryRepository salaryRepository) {
        this.salaryRepository = salaryRepository;
    }

    @GetMapping
    public List<Salary> getAllSalaries() {
        return salaryRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Salary> getSalaryById(@PathVariable Long id) {
        return salaryRepository.findById(id);
    }

    @PostMapping
    public Salary createSalary(@RequestBody Salary salary) {
        return salaryRepository.save(salary);
    }

    @PutMapping("/{id}")
    public Salary updateSalary(@PathVariable Long id, @RequestBody Salary updatedSalary) {
        return salaryRepository.findById(id)
                .map(salary -> {
                    salary.setEmployee(updatedSalary.getEmployee());
                    salary.setWorkingDays(updatedSalary.getWorkingDays());
                    salary.setPayDate(updatedSalary.getPayDate());
                    salary.setAdvance(updatedSalary.getAdvance());
                    salary.setAllowance(updatedSalary.getAllowance());
                    return salaryRepository.save(salary);
                })
                .orElseGet(() -> {
                    updatedSalary.setId(id);
                    return salaryRepository.save(updatedSalary);
                });
    }

    @DeleteMapping("/{id}")
    public void deleteSalary(@PathVariable Long id) {
        salaryRepository.deleteById(id);
    }
}
