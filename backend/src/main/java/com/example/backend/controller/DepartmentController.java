package com.example.backend.controller;

import java.util.Comparator;
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

import com.example.backend.model.Department;
import com.example.backend.repository.DepartmentRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/departments")
public class DepartmentController {

private final DepartmentRepository departmentRepository;

public DepartmentController(DepartmentRepository departmentRepository) {
    this.departmentRepository = departmentRepository;
}

// Endpoint để lấy tất cả các department
@GetMapping
public List<Department> getAllDepartments() {
    List<Department> departments = departmentRepository.findAll();
    departments.sort(Comparator.comparingLong(Department::getId));
    return departments;
}
// Endpoint để lấy một department dựa trên ID
@GetMapping("/{id}")
public Optional<Department> getDepartmentById(@PathVariable Long id) {
    return departmentRepository.findById(id);
}

// Endpoint để thêm một department mới
@PostMapping
public Department createDepartment(@RequestBody Department department) {
    return departmentRepository.save(department);
}

// Endpoint để cập nhật thông tin của một department
@PutMapping("/{id}")
public Department updateDepartment(@PathVariable Long id, @RequestBody Department updatedDepartment) {
    return departmentRepository.findById(id)
            .map(department -> {
                department.setName(updatedDepartment.getName());
                return departmentRepository.save(department);
            })
            .orElseGet(() -> {
                updatedDepartment.setId(id);
                return departmentRepository.save(updatedDepartment);
            });
}

// Endpoint để xóa một department dựa trên ID
@DeleteMapping("/{id}")
public void deleteDepartment(@PathVariable Long id) {
    departmentRepository.deleteById(id);
}
}