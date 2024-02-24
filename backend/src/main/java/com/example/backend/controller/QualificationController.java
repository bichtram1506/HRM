package com.example.backend.controller;

import java.util.Comparator;
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

import com.example.backend.model.Qualification;
import com.example.backend.repository.QualificationRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/qualifications")
public class QualificationController {

    private final QualificationRepository qualificationRepository;

    public QualificationController(QualificationRepository qualificationRepository) {
        this.qualificationRepository = qualificationRepository;
    }

    // Endpoint để lấy tất cả các qualifications
    @GetMapping
    public List<Qualification> getAllQualifications() {
        List<Qualification> qualifications = qualificationRepository.findAll();
        qualifications.sort(Comparator.comparingLong(Qualification::getId));
        return qualifications;
    }
    // Endpoint để lấy một qualification dựa trên ID
    @GetMapping("/{id}")
    public Optional<Qualification> getQualificationById(@PathVariable Long id) {
        return qualificationRepository.findById(id);
    }

    // Endpoint để thêm một qualification mới
    @PostMapping
    public Qualification createQualification(@RequestBody Qualification qualification) {
        return qualificationRepository.save(qualification);
    }

    // Endpoint để cập nhật thông tin của một qualification
    @PutMapping("/{id}")
    public Qualification updateQualification(@PathVariable Long id, @RequestBody Qualification updatedQualification) {
        return qualificationRepository.findById(id)
                .map(qualification -> {
                    qualification.setName(updatedQualification.getName());
                    qualification.setCode(updatedQualification.getCode());
                    qualification.setDescription(updatedQualification.getDescription()); // Thêm cập nhật cho description
                    return qualificationRepository.save(qualification);
                })
                .orElseGet(() -> {
                    updatedQualification.setId(id);
                    return qualificationRepository.save(updatedQualification);
                });
    }

    // Endpoint để xóa một qualification dựa trên ID
    @DeleteMapping("/{id}")
    public void deleteQualification(@PathVariable Long id) {
        qualificationRepository.deleteById(id);
    }
}