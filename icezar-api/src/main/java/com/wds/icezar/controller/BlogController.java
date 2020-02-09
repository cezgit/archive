package com.wds.icezar.controller;

import com.wds.icezar.domain.Blog;
import com.wds.icezar.domain.Deal;
import com.wds.icezar.repo.BlogRepository;
import com.wds.icezar.repo.DealRepository;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.collections4.IterableUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static java.util.Arrays.asList;

@RestController
@RequestMapping("/icezar")
@CrossOrigin(origins = "*", maxAge = 3600)
public class BlogController {

    private static final int PAGE_SIZE = 20;
    //    private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd-HH:mm:ss");
    @Autowired
    private BlogRepository blogRepository;

    @Autowired
    private DealRepository dealRepository;


    @RequestMapping(value="/search", method=RequestMethod.GET)
    public @ResponseBody
    BlogsView findBlogs(@RequestParam("query") Optional<String> query,
                        @RequestParam("page") Optional<Integer> page) {

        BlogsView view = new BlogsView();
        Integer pageNumber = page.orElse(0);
        Page<Blog> blogPage;
        if(query.isPresent()) {
            blogPage = blogRepository.findByContentContainingOrTitleContainingAllIgnoreCase(query.get(), query.get(), PageRequest.of(pageNumber, PAGE_SIZE, Sort.by("date")));
        }
        else {
            blogPage = blogRepository.findAll(PageRequest.of(pageNumber, PAGE_SIZE, Sort.by("date")));
        }

        List<Blog> blogList = blogPage.getContent();
        fetchBlogDeals(blogList);

        view.blogs = blogList;
        return view;
    }

    @RequestMapping(value="/blogs", method=RequestMethod.GET)
    public @ResponseBody
    BlogsView findBlogs(@RequestParam("category") Optional<String> category,
                        @RequestParam("tag") Optional<String> tag,
                        @RequestParam("page") Optional<Integer> page) {

        BlogsView view = new BlogsView();
        Integer pageNumber = page.orElse(0);
        Page<Blog> blogPage;
        if(category.isPresent()) {
            if(tag.isPresent()) {
                blogPage = blogRepository.findByCategoryAndTagsIn(category.get(), asList(tag.get()), PageRequest.of(pageNumber, PAGE_SIZE, Sort.by(Sort.Direction.DESC, "date")));
            }
            else {
                blogPage = blogRepository.findByCategory(category.get(), PageRequest.of(pageNumber, PAGE_SIZE, Sort.by(Sort.Direction.DESC, "date")));
            }
        }
        else {
            if(tag.isPresent()) {
                blogPage = blogRepository.findByTagsIn(asList(tag.get()), PageRequest.of(pageNumber, PAGE_SIZE, Sort.by(Sort.Direction.DESC, "date")));
            }
            else {
                blogPage = blogRepository.findAll(PageRequest.of(pageNumber, PAGE_SIZE, Sort.by(Sort.Direction.DESC, "date")));
            }
        }

        List<Blog> blogList = blogPage.getContent();
        fetchBlogDeals(blogList);

        view.blogs = blogList;

        return view;
    }

    @RequestMapping(value="/blog", method=RequestMethod.GET)
    BlogView findBlog(@RequestParam("blogId") String blogId) {
        BlogView view = new BlogView();
        Optional<Blog> blog = blogRepository.findById(blogId);
        if(blog.isPresent()) {
            Blog theBlog = blog.get();
            fetchBlogDeals(asList(theBlog));
            view.blog = theBlog;
        }
        return view;
    }

    private void fetchBlogDeals(List<Blog> blogList) {
        blogList.forEach(blog -> {
            if(!CollectionUtils.isEmpty(blog.getDealIds())) {
                Iterable<Deal> iterable = dealRepository.findAllById(blog.getDealIds());
                List<Deal> deals = IterableUtils.toList(iterable);
                blog.setDeals(deals);
            }
        });
    }
}
