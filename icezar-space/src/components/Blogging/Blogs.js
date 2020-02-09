import React, { Component } from "react";

import fetch from "node-fetch";
import queryString from "query-string";
import _ from "lodash";
import * as constants from "../../Constants";

import BlogBrief from "./BlogBrief";
import BlogBriefPair from "./BlogBriefPair";
import PageNavigation from "./PageNavigation";

class Blogs extends Component {
  constructor(props) {
    super(props);
    console.log("constructor called");
    this.state = {
      blogs: [],
      category: "",
      tag: "",
      query: "",
      needsUpdate: false
    };
  }

  fetchBlogs = params => {
    let pageNumber = params.pageNumber || 0;
    params.page = pageNumber;

    if (this.state.query && this.state.query.length > 0) {
      params.query = this.state.query;
    } else {
      if (this.state.category) {
        params.category = this.state.category;
      }

      if (this.state.tag) {
        params.tag = this.state.tag;
      }
    }
    let fetchType = params.query ? "search" : "blogs";
    let fetchUrl =
      constants.API_URL + fetchType + "?" + queryString.stringify(params);
    console.log("fetch called");

    fetch(fetchUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(result => {
        return result.json();
      })
      .then(json => {
        this.setState({
          blogs: json.blogs,
          category: params.category || "",
          tag: params.tag || "",
          query: params.query || ""
        });
      });
  };

  componentDidUpdate() {
    console.log("componentDidUpdate called");

    if (this.state.needsUpdate) {
      this.setState({ needsUpdate: false });
      console.log("fetch dispatched");
      this.fetchBlogs({});
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps called");

    let query = _.get(nextProps, "location.state.query", "");
    let category = _.get(nextProps, "location.state.categoryId", "");
    let tag = _.get(nextProps, "location.state.tagId", "");

    let newState = {};

    if (query !== prevState.query) {
      console.log("state gets new query: " + query);
      newState.query = query || "";
      newState.category = "";
      newState.tag = "";
      newState.needsUpdate = true;
    } else {
      if (category !== prevState.category) {
        console.log("state gets newCategory: " + category);
        newState.needsUpdate = true;
        newState.category = category;
      }
      if (tag !== prevState.tag) {
        console.log("state gets tag: " + tag);
        newState.needsUpdate = true;
        newState.tag = tag;
      }
    }

    if (newState.needsUpdate) {
      console.log("newState: " + JSON.stringify(newState));
      return newState;
    }
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount called");
    this.fetchBlogs({});
  }

  render() {
    let blogPairs = [];

    if (this.state.blogs) {
      let blogs = [];
      this.state.blogs.forEach((blog, index) => {
        if (index > 0 && index % 2 === 0) {
          blogPairs.push(<BlogBriefPair blogPair={blogs} />);
          blogs = [];
        } else {
          blogs.push(<BlogBrief key={blog.id} data={blog} />);
        }
      });
      if (blogs.length > 0) {
        blogPairs.push(<BlogBriefPair blogPair={blogs} />);
      }
    }

    let tags = new Set();
    if (this.state.blogs) {
      this.state.blogs.forEach(blog => {
        let blogTags = blog.tags;
        blogTags.forEach(tag => {
          tags.add(tag);
        });
      });
    }

    return (
      <div className="col-lg-9 mb-9 mb-lg-0">
        {blogPairs}

        <div className="mb-9" />

        <PageNavigation />
      </div>
    );
  }
}

export default Blogs
