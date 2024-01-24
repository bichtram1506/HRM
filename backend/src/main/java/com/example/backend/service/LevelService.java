package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.backend.model.Level;
import com.example.backend.repository.LevelRepository;

@Service
public class LevelService {
    private final LevelRepository levelRepository;

    public LevelService(LevelRepository levelRepository) {
        this.levelRepository = levelRepository;
    }

    public List<Level> getAllLevels() {
        return levelRepository.findAll();
    }

    public Optional<Level> getLevelById(Long id) {
        return levelRepository.findById(id);
    }

    public Level createLevel(Level level) {
        return levelRepository.save(level);
    }

    public Level updateLevel(Long id, Level updatedLevel) {
        return levelRepository.findById(id)
                .map(level -> {
                    level.setName(updatedLevel.getName());
                    level.setCode(updatedLevel.getCode());
                    level.setDescription(updatedLevel.getDescription());
                    return levelRepository.save(level);
                })
                .orElse(null);
    }

    public void deleteLevel(Long id) {
        levelRepository.deleteById(id);
    }
}