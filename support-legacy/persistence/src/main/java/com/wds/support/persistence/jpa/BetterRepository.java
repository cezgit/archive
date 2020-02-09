package com.wds.support.persistence.jpa;

import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.io.Serializable;
import java.util.Optional;

@NoRepositoryBean
public interface BetterRepository<T, ID extends Serializable> extends PagingAndSortingRepository<T, ID> {
    Optional<T> findById(ID id);
}
