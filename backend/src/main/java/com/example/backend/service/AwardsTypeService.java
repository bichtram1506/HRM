package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.backend.model.AwardsType;
import com.example.backend.repository.AwardsTypeRepository;

@Service
public class AwardsTypeService {
    private final AwardsTypeRepository awardsTypeRepository;

    public AwardsTypeService(AwardsTypeRepository awardsTypeRepository) {
        this.awardsTypeRepository = awardsTypeRepository;
    }

    public List<AwardsType> getAllAwardsTypes() {
        return awardsTypeRepository.findAll();
    }

    public Optional<AwardsType> getAwardsTypeById(Long id) {
        return awardsTypeRepository.findById(id);
    }

    public AwardsType createAwardsType(AwardsType awardsType) {
        return awardsTypeRepository.save(awardsType);
    }

    public AwardsType updateAwardsType(Long id, AwardsType updatedAwardsType) {
        return awardsTypeRepository.findById(id)
                .map(awardsType -> {
                    awardsType.setName(updatedAwardsType.getName());
                    awardsType.setDescription(updatedAwardsType.getDescription());
                    // Add other fields of awards type
                    return awardsTypeRepository.save(awardsType);
                })
                .orElse(null);
    }

    public void deleteAwardsType(Long id) {
        awardsTypeRepository.deleteById(id);
    }
}
