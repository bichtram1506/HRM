package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.backend.model.EmployeeType;
import com.example.backend.repository.EmployeeTypeRepository;

@Service
public class EmployeeTypeService {
    private final EmployeeTypeRepository employeeTypeRepository;

    public EmployeeTypeService(EmployeeTypeRepository employeeTypeRepository) {
        this.employeeTypeRepository = employeeTypeRepository;
    }

    public List<EmployeeType> getAllEmployeeTypes() {
        return employeeTypeRepository.findAll();
    }

    public Optional<EmployeeType> getEmployeeTypeById(Long id) {
        return employeeTypeRepository.findById(id);
    }

    public EmployeeType createEmployeeType(EmployeeType employeeType) {
        return employeeTypeRepository.save(employeeType);
    }

    public EmployeeType updateEmployeeType(Long id, EmployeeType updatedEmployeeType) {
        return employeeTypeRepository.findById(id)
                .map(employeeType -> {
                    employeeType.setName(updatedEmployeeType.getName());
                    employeeType.setDescription(updatedEmployeeType.getDescription());
                    // Các trường thông tin khác của employee type
                    return employeeTypeRepository.save(employeeType);
                })
                .orElse(null);
    }

    public void deleteEmployeeType(Long id) {
        employeeTypeRepository.deleteById(id);
    }
}