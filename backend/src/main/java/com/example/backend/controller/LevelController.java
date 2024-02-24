package com.example.backend.controller;

import java.util.Comparator;
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

import com.example.backend.model.Level;
import com.example.backend.repository.LevelRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/levels")
public class LevelController {

    private final LevelRepository levelRepository;

    public LevelController(LevelRepository levelRepository) {
        this.levelRepository = levelRepository;
    }

    // Endpoint để lấy tất cả các levels
    @GetMapping
    public List<Level> getAllLevels() {
        List<Level> levels = levelRepository.findAll();
        levels.sort(Comparator.comparingLong(Level::getId));
        return levels;
    }

    // Endpoint để lấy một level dựa trên ID
    @GetMapping("/{id}")
    public Optional<Level> getLevelById(@PathVariable Long id) {
        return levelRepository.findById(id);
    }

    // Endpoint để thêm một level mới
    @PostMapping
    public Level createLevel(@RequestBody Level level) {
        return levelRepository.save(level);
    }

    // Endpoint để cập nhật thông tin của một level
    @PutMapping("/{id}")
    public Level updateLevel(@PathVariable Long id, @RequestBody Level updatedLevel) {
        return levelRepository.findById(id)
                .map(level -> {
                    level.setName(updatedLevel.getName());
                    level.setCode(updatedLevel.getCode());
                    level.setDescription(updatedLevel.getDescription());
                    return levelRepository.save(level);
                })
                .orElseGet(() -> {
                    updatedLevel.setId(id);
                    return levelRepository.save(updatedLevel);
                });
    }

    // Endpoint để xóa một level dựa trên ID
    @DeleteMapping("/{id}")
    public void deleteLevel(@PathVariable Long id) {
        levelRepository.deleteById(id);
    }
}