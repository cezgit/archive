package com.wds.icezar.repo;

import com.wds.icezar.domain.Blog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface BlogRepository extends MongoRepository<Blog, String> {

    Page<Blog> findByCategory(String category, Pageable pageable);
    Page<Blog> findByTagsIn(List<String> tag, Pageable pageable);
    Page<Blog> findByCategoryAndTagsIn(String category, List<String> tags, Pageable pageable);
    Page<Blog> findAll(Pageable pageable);
    Optional<Blog> findById(String id);

//    @Query(" { companyName: { $regex : '(?i)?0'}  } }")
    Page<Blog> findByContentContainingOrTitleContainingAllIgnoreCase(String query, String sameQuery, Pageable pageable);
}
