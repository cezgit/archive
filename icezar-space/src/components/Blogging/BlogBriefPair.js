import React, { Component } from 'react'

class BlogBriefPair extends Component {

    render() {        
        let blogs = [];
        this.props.blogPair.forEach(blog => {
            blogs.push(blog)
        });

        return <div className="card-deck d-block d-lg-flex">
            {blogs}
        </div>
    }
}

export default BlogBriefPair