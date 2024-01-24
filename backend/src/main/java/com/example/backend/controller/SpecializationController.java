package com.example.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Specialization;
import com.example.backend.repository.SpecializationRepository;

@RestController
@RequestMapping("/api/specializations")
public class SpecializationController {

    private final SpecializationRepository specializationRepository;

    public SpecializationController(SpecializationRepository specializationRepository) {
        this.specializationRepository = specializationRepository;
    }

    @GetMapping
    public List<Specialization> getAllSpecializations() {
        return specializationRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Specialization> getSpecializationById(@PathVariable Long id) {
        return specializationRepository.findById(id);
    }

    @PostMapping
    public Specialization createSpecialization(@RequestBody Specialization specialization) {
        return specializationRepository.save(specialization);
    }

    @PutMapping("/{id}")
    public Specialization updateSpecialization(@PathVariable Long id, @RequestBody Specialization updatedSpecialization) {
        return specializationRepository.findById(id)
                .map(specialization -> {
                    specialization.setName(updatedSpecialization.getName());
                    specialization.setCode(updatedSpecialization.getCode());
                    specialization.setDescription(updatedSpecialization.getDescription());
                    return specializationRepository.save(specialization);
                })
                .orElseGet(() -> {
                    updatedSpecialization.setId(id);
                    return specializationRepository.save(updatedSpecialization);
                });
    }

    @DeleteMapping("/{id}")
    public void deleteSpecialization(@PathVariable Long id) {
        specializationRepository.deleteById(id);
    }
}