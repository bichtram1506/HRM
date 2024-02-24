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

import com.example.backend.model.Employee;
import com.example.backend.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private final EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    // Endpoint để lấy tất cả các employees
    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // Endpoint để lấy một employee dựa trên ID
    @GetMapping("/{id}")
    public Optional<Employee> getEmployeeById(@PathVariable Long id) {
        return employeeRepository.findById(id);
    }

    // Endpoint để thêm một employee mới
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    // Endpoint để cập nhật thông tin của một employee
    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee updatedEmployee) {
        return employeeRepository.findById(id)
                .map(employee -> {
                    employee.setName(updatedEmployee.getName());
                    employee.setSex(updatedEmployee.getSex());
                    employee.setMarital_status(updatedEmployee.getMarital_status());
                    employee.setHometown(updatedEmployee.getHometown());
                    employee.setAvatar(updatedEmployee.getAvatar());
                    employee.setEmail(updatedEmployee.getEmail());
                    employee.setStatus(updatedEmployee.getStatus());
                    employee.setEmployee_type_id(updatedEmployee.getEmployee_type_id());
                    employee.setLevel_id(updatedEmployee.getLevel_id());
                    employee.setDepartment_id(updatedEmployee.getDepartment_id());
                    employee.setPosition_id(updatedEmployee.getPosition_id());
                    employee.setQualification_id(updatedEmployee.getQualification_id());
                    employee.setSpecialization_id(updatedEmployee.getSpecialization_id());
                    return employeeRepository.save(employee);
                })
                .orElseGet(() -> {
                    updatedEmployee.setId(id);
                    return employeeRepository.save(updatedEmployee);
                });
    }

    // Endpoint để xóa một employee dựa trên ID
    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable Long id) {
        employeeRepository.deleteById(id);
    }
}