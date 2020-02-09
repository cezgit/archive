package com.wds.icezar.controller;

import com.wds.icezar.domain.Blog;

import java.util.stream.Collectors;

import static java.util.Arrays.asList;

public class BlogView {


    public Blog blog;
    private Integer MAX_PREVIEW_WORDS = 50;

    public String getPreview() {
        if(blog.getContent() != null) {
            return asList(blog.getContent().split("\\s+")).stream().limit(MAX_PREVIEW_WORDS).collect(Collectors.joining(" "));
        }
        return "";
    }
}
