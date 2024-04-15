package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import com.example.backend.model.Assignment;

@Repository
public interface AssignmentRepository extends JpaRepository<Assignment, Long> {
    // Query to fetch Assignment with related entities
    @Query("SELECT a FROM Assignment a JOIN FETCH a.employee WHERE a.id = ?1")
    Assignment findByIdWithEmployee(Long id);
}
