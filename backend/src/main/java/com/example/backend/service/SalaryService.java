package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.backend.model.Salary;
import com.example.backend.repository.SalaryRepository;

@Service
public class SalaryService {
    private final SalaryRepository salaryRepository;

    public SalaryService(SalaryRepository salaryRepository) {
        this.salaryRepository = salaryRepository;
    }

    public List<Salary> getAllSalaries() {
        return salaryRepository.findAll();
    }

    public Optional<Salary> getSalaryById(Long id) {
        return salaryRepository.findById(id);
    }

    public Salary createSalary(Salary salary) {
        return salaryRepository.save(salary);
    }

    public Salary updateSalary(Long id, Salary updatedSalary) {
        return salaryRepository.findById(id)
                .map(salary -> {
                    // Update salary fields
                    salary.setWorkingDays(updatedSalary.getWorkingDays());
                    salary.setPayDate(updatedSalary.getPayDate());
                    salary.setAdvance(updatedSalary.getAdvance());
                    salary.setAllowance(updatedSalary.getAllowance());
                    salary.setMonthlySalary(updatedSalary.getMonthlySalary()); // Set monthlySalary
                    // Save the updated salary object
                    return salaryRepository.save(salary);
                })
                .orElse(null);
    }

    public void deleteSalary(Long id) {
        salaryRepository.deleteById(id);
    }
}
