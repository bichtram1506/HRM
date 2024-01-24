package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Level;

@Repository
public interface LevelRepository extends JpaRepository<Level, Long> {
}