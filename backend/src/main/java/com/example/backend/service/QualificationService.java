package com.example.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.backend.model.Qualification;
import com.example.backend.repository.QualificationRepository;

@Service
public class QualificationService {
    private final QualificationRepository qualificationRepository;

    public QualificationService(QualificationRepository qualificationRepository) {
        this.qualificationRepository = qualificationRepository;
    }

    public List<Qualification> getAllQualifications() {
        return qualificationRepository.findAll();
    }
}