import React from 'react'
import * as constants from '../../Constants'
import { withRouter } from 'react-router-dom'

const ArticleNav = (props) => {

    let fetchBlogsByCategory = (e) => {
        props.history.push('/blogs')
        props.updateUrl(constants.categoryUrl(e))
    }

    let categories = []
    let categoryNames = Object.keys(constants.CATEGORY_MAP)
    categoryNames.forEach(categoryName => {
        categories.push(
          <li className='list-group-item' key={categoryName}>
            <div className='card-link div-link' onClick={fetchBlogsByCategory}>
              {categoryName}
            </div>
          </li>
        );
    })

    return (
        <div className="col-md-3 ml-auto">
            <aside className="sidebar">
                <div className="card mb-4">
                    <div className="card-body">
                        <h4 className="card-title">Services</h4>
                        <ul className="list-unstyled">
                            <li>Dynamic Websites</li>
                            <li>SEO / Affiliate Marketing</li>
                            <li>Data Manipulation / Reporting</li>
                            <li>Cloud Integration (AWS)</li>
                            <li>Photography</li>
                        </ul>
                    </div>
                </div>
            </aside>

            <aside className="sidebar sidebar-sticky">
                <article className="card outline mb-4">
                    <div className="card-body">
                        <h4 className="card-title">Categories</h4>
                    </div>
                    <ul className="list-group list-group-flush">
                        {categories}
                    </ul>
                </article>
            </aside>
        </div>  
    )
}

export default withRouter(ArticleNav)