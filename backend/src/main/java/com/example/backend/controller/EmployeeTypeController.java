package com.example.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.EmployeeType;
import com.example.backend.repository.EmployeeTypeRepository;

@RestController
@RequestMapping("/api/employee-types")
public class EmployeeTypeController {

    private final EmployeeTypeRepository employeeTypeRepository;

    public EmployeeTypeController(EmployeeTypeRepository employeeTypeRepository) {
        this.employeeTypeRepository = employeeTypeRepository;
    }

    // Endpoint để lấy tất cả các employee types
    @GetMapping
    public List<EmployeeType> getAllEmployeeTypes() {
        return employeeTypeRepository.findAll();
    }

    // Endpoint để lấy một employee type dựa trên ID
    @GetMapping("/{id}")
    public Optional<EmployeeType> getEmployeeTypeById(@PathVariable Long id) {
        return employeeTypeRepository.findById(id);
    }

    // Endpoint để thêm một employee type mới
    @PostMapping
    public EmployeeType createEmployeeType(@RequestBody EmployeeType employeeType) {
        return employeeTypeRepository.save(employeeType);
    }

    // Endpoint để cập nhật thông tin của một employee type
    @PutMapping("/{id}")
    public EmployeeType updateEmployeeType(@PathVariable Long id, @RequestBody EmployeeType updatedEmployeeType) {
        return employeeTypeRepository.findById(id)
                .map(employeeType -> {
                    employeeType.setName(updatedEmployeeType.getName());
                    employeeType.setDescription(updatedEmployeeType.getDescription());
                    // Các trường thông tin khác của employee type
                    return employeeTypeRepository.save(employeeType);
                })
                .orElseGet(() -> {
                    updatedEmployeeType.setId(id);
                    return employeeTypeRepository.save(updatedEmployeeType);
                });
    }

    // Endpoint để xóa một employee type dựa trên ID
    @DeleteMapping("/{id}")
    public void deleteEmployeeType(@PathVariable Long id) {
        employeeTypeRepository.deleteById(id);
    }
}