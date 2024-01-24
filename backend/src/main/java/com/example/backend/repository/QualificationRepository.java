package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Qualification;

@Repository
public interface QualificationRepository extends JpaRepository<Qualification, Long> {
}