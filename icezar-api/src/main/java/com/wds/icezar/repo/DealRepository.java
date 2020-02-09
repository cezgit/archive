package com.wds.icezar.repo;

import com.wds.icezar.domain.Deal;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface DealRepository extends MongoRepository<Deal, String> {

//    @Query("{_id: { $in: ?0 } })")
//    List<Deal> findByIds(List<String> ids);

}
