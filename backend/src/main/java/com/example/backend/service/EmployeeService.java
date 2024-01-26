package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.backend.model.Employee;
import com.example.backend.repository.EmployeeRepository;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee updateEmployee(Long id, Employee updatedEmployee) {
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
                .orElse(null);
    }

    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}