package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import com.example.backend.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // Query to fetch Employee with related entities
    @Query("SELECT e FROM Employee e JOIN FETCH e.employeeType JOIN FETCH e.level JOIN FETCH e.department JOIN FETCH e.position JOIN FETCH e.qualification JOIN FETCH e.specialization WHERE e.id = ?1")
    Employee findByIdWithDetails(Long id);
}