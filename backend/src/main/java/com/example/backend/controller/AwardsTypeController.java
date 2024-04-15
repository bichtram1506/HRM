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

import com.example.backend.model.AwardsType;
import com.example.backend.repository.AwardsTypeRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/awards-types")
public class AwardsTypeController {

    private final AwardsTypeRepository awardsTypeRepository;

    public AwardsTypeController(AwardsTypeRepository awardsTypeRepository) {
        this.awardsTypeRepository = awardsTypeRepository;
    }

    // Endpoint để lấy tất cả các awards types
    @GetMapping
    public List<AwardsType> getAllAwardsTypes() {
        List<AwardsType> awardsTypes = awardsTypeRepository.findAll();
        awardsTypes.sort(Comparator.comparingLong(AwardsType::getId));
        return awardsTypes;
    }

    // Endpoint để lấy một award type dựa trên ID
    @GetMapping("/{id}")
    public Optional<AwardsType> getAwardsTypeById(@PathVariable Long id) {
        return awardsTypeRepository.findById(id);
    }

    // Endpoint để thêm một award type mới
    @PostMapping
    public AwardsType createAwardsType(@RequestBody AwardsType awardsType) {
        return awardsTypeRepository.save(awardsType);
    }

    // Endpoint để cập nhật thông tin của một award type
    @PutMapping("/{id}")
    public AwardsType updateAwardsType(@PathVariable Long id, @RequestBody AwardsType updatedAwardsType) {
        return awardsTypeRepository.findById(id)
                .map(awardsType -> {
                    awardsType.setName(updatedAwardsType.getName());
                    awardsType.setDescription(updatedAwardsType.getDescription());
                    // Các trường thông tin khác của award type
                    return awardsTypeRepository.save(awardsType);
                })
                .orElseGet(() -> {
                    updatedAwardsType.setId(id);
                    return awardsTypeRepository.save(updatedAwardsType);
                });
    }

    // Endpoint để xóa một award type dựa trên ID
    @DeleteMapping("/{id}")
    public void deleteAwardsType(@PathVariable Long id) {
        awardsTypeRepository.deleteById(id);
    }
}
