package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.backend.model.Specialization;
import com.example.backend.repository.SpecializationRepository;

@Service
public class SpecializationService {
    private final SpecializationRepository specializationRepository;

    public SpecializationService(SpecializationRepository specializationRepository) {
        this.specializationRepository = specializationRepository;
    }

    public List<Specialization> getAllSpecializations() {
        return specializationRepository.findAll();
    }

    public Optional<Specialization> getSpecializationById(Long id) {
        return specializationRepository.findById(id);
    }

    public Specialization createSpecialization(Specialization specialization) {
        return specializationRepository.save(specialization);
    }

    public Specialization updateSpecialization(Long id, Specialization updatedSpecialization) {
        return specializationRepository.findById(id)
                .map(specialization -> {
                    specialization.setName(updatedSpecialization.getName());
                    specialization.setCode(updatedSpecialization.getCode());
                    specialization.setDescription(updatedSpecialization.getDescription());
                    return specializationRepository.save(specialization);
                })
                .orElse(null);
    }

    public void deleteSpecialization(Long id) {
        specializationRepository.deleteById(id);
    }
}