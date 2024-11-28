package com.healthcare.ehealthcaremanagement.repository;

import com.healthcare.ehealthcaremanagement.model.Patient;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PatientRepository extends MongoRepository<Patient, String> {
    // Custom query methods can be added here if needed
}
