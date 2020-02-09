package com.wds.icezar.repo;


import com.wds.icezar.domain.Blog;
import org.apache.commons.collections4.IterableUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.test.context.junit4.SpringRunner;

import static java.util.Arrays.asList;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.greaterThanOrEqualTo;
import static org.hamcrest.Matchers.is;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BlogRepositoryTest {

    @Autowired
    private BlogRepository blogRepository;

    private Logger logger = LogManager.getLogger();

    @Test
    public void findAllByIds() {

        String id = "5bb935a97c183e0c967a3162";
        Iterable<String> ids = asList(id);
        Iterable<Blog> blogs = blogRepository.findAllById(ids);
        assertThat(IterableUtils.toList(blogs).size(), greaterThanOrEqualTo(1));
    }

    @Test
    public void findByTag(){

        String tagName = "java";
        Page<Blog> page = blogRepository.findByTagsIn(asList(tagName), PageRequest.of(0, 20, Sort.by("date")));
        logger.info("blog count: "+page.getContent().size());
        assertThat(page.getTotalPages(), greaterThanOrEqualTo(1));
    }

    @Test
    public void findByCategory(){

        String categoryName = "dev";
        Page<Blog> page = blogRepository.findByCategory(categoryName, PageRequest.of(0, 20, Sort.by("date")));
        logger.info("blog count: "+page.getContent().size());
        assertThat(page.getTotalPages(), greaterThanOrEqualTo(1));
    }

    @Test
    public void findByCategoryAndTags(){

        String categoryName = "dev";
        String tagName = "java";
        Page<Blog> page = blogRepository.findByCategoryAndTagsIn(categoryName, asList(tagName), PageRequest.of(0, 20, Sort.by("date")));
        logger.info("blog count: "+page.getContent().size());
        assertThat(page.getTotalPages(), greaterThanOrEqualTo(1));
    }

    @Test
    public void findByPage(){

        Page<Blog> blogPage = blogRepository.findAll(PageRequest.of(0, 20, Sort.by("date")));
        logger.info("blog count: "+blogPage.getContent().size());
        assertThat(blogPage.getContent().size(), greaterThanOrEqualTo(1));
        assertThat(blogPage.getTotalPages(), is(1));
    }

    @Test
    public void findByContentContainingOrTitleContainingAllIgnoreCase(){

        String query = "spotify";
        Page<Blog> blogPage = blogRepository.findByContentContainingOrTitleContainingAllIgnoreCase(query, query, PageRequest.of(0, 20, Sort.by("date")));
        logger.info("blog count: "+blogPage.getContent().size());
        assertThat(blogPage.getContent().size(), greaterThanOrEqualTo(1));
        assertThat(blogPage.getTotalPages(), is(1));
    }
}
