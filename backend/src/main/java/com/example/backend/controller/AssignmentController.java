package com.example.backend.controller;

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

import com.example.backend.model.Assignment;
import com.example.backend.repository.AssignmentRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/assignments")
public class AssignmentController {

    private final AssignmentRepository assignmentRepository;

    public AssignmentController(AssignmentRepository assignmentRepository) {
        this.assignmentRepository = assignmentRepository;
    }

    @GetMapping
    public List<Assignment> getAllAssignments() {
        return assignmentRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Assignment> getAssignmentById(@PathVariable Long id) {
        return assignmentRepository.findById(id);
    }

    @PostMapping
    public Assignment createAssignment(@RequestBody Assignment assignment) {
        return assignmentRepository.save(assignment);
    }

    @PutMapping("/{id}")
    public Assignment updateAssignment(@PathVariable Long id, @RequestBody Assignment updatedAssignment) {
        return assignmentRepository.findById(id)
                .map(assignment -> {
                    assignment.setEmployee(updatedAssignment.getEmployee());
                    assignment.setCode(updatedAssignment.getCode());
                    assignment.setStartDate(updatedAssignment.getStartDate());
                    assignment.setEndDate(updatedAssignment.getEndDate());
                    assignment.setPurpose(updatedAssignment.getPurpose());
                    assignment.setNotes(updatedAssignment.getNotes());
                    assignment.setStatus(updatedAssignment.getStatus());
                    assignment.setLocation(updatedAssignment.getLocation());
                    return assignmentRepository.save(assignment);
                })
                .orElseGet(() -> {
                    updatedAssignment.setId(id);
                    return assignmentRepository.save(updatedAssignment);
                });
    }

    @DeleteMapping("/{id}")
    public void deleteAssignment(@PathVariable Long id) {
        assignmentRepository.deleteById(id);
    }
}
