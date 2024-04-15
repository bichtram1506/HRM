package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Salary;

@Repository
public interface SalaryRepository extends JpaRepository<Salary, Long> {
    // Các phương thức tùy chỉnh có thể được thêm vào đây nếu cần thiết
}
