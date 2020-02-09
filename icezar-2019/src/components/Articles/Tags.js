import React from 'react'
import * as constants from '../../Constants'
import { withRouter } from "react-router-dom";

function Tags(props) {

    let fetchBlogsByTag = (e) => {
        e.preventDefault()
        let url = constants.API_URL + 'blogs?tag=' + e.target.innerHTML
        props.history.push('/blogs')
        props.updateUrl(url)
    }

    let tagLinks = new Set()
    if (props.tags) {
        let articleTags = props.tags
        articleTags.forEach(tag => {
            tagLinks.add(<div key={tag} className="btn btn-light btn-sm mb-1 mr-1" onClick={fetchBlogsByTag}>{tag}</div>)
        })
    }    
    
    return (
        <div>
            Tags: {tagLinks}            
        </div>
    )

}
export default withRouter(Tags)