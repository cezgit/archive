package com.wds.support.persistence.jpa;

import org.springframework.data.jpa.repository.support.JpaEntityInformation;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;

import javax.persistence.EntityManager;
import java.io.Serializable;
import java.util.Optional;

public class BetterRepositoryImpl<T, ID extends Serializable>
        extends SimpleJpaRepository<T, ID>  implements BetterRepository<T, ID> {

    private final EntityManager entityManager;

    public BetterRepositoryImpl(JpaEntityInformation entityInformation, EntityManager entityManager) {
        super(entityInformation, entityManager);
        // Keep the EntityManager around to used from the newly introduced methods.
        this.entityManager = entityManager;
    }

    public Optional<T> findById(ID id) {
        return Optional.of(findOne(id));
    }
}
