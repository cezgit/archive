package com.wds.icezar.repo;

import com.wds.icezar.domain.ContactMessage;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContactRepository extends MongoRepository<ContactMessage, String> {



}
