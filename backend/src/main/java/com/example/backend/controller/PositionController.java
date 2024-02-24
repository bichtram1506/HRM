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

import com.example.backend.model.Position;
import com.example.backend.repository.PositionRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/positions")
public class PositionController {

    private final PositionRepository positionRepository;

    public PositionController(PositionRepository positionRepository) {
        this.positionRepository = positionRepository;
    }

    // Endpoint để lấy tất cả các positions
    @GetMapping
    public List<Position> getAllPositions() {
        List<Position> positions = positionRepository.findAll();
        positions.sort(Comparator.comparingLong(Position::getId));
        return positions;
    }

    // Endpoint để lấy một position dựa trên ID
    @GetMapping("/{id}")
    public Optional<Position> getPositionById(@PathVariable Long id) {
        return positionRepository.findById(id);
    }

    // Endpoint để thêm một position mới
    @PostMapping
    public Position createPosition(@RequestBody Position position) {
        return positionRepository.save(position);
    }

    // Endpoint để cập nhật thông tin của một position
    @PutMapping("/{id}")
    public Position updatePosition(@PathVariable Long id, @RequestBody Position updatedPosition) {
        return positionRepository.findById(id)
                .map(position -> {
                    position.setName(updatedPosition.getName());
                    position.setCode(updatedPosition.getCode());
                    position.setDaily_wage(updatedPosition.getDaily_wage()); // Sửa thành daily_wage
                    return positionRepository.save(position);
                })
                .orElseGet(() -> {
                    updatedPosition.setId(id);
                    return positionRepository.save(updatedPosition);
                });
    }

    // Endpoint để xóa một position dựa trên ID
    @DeleteMapping("/{id}")
    public void deletePosition(@PathVariable Long id) {
        positionRepository.deleteById(id);
    }
}