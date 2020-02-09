import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import moment from 'moment'
import * as constants from '../../Constants'
import _ from 'lodash'

const ArticleHeader = (props) => {

    let headerStyle = props.align ?
        `card-header text-${props.align}` :
        'card-header'

    let categoryViewName = _.invert(constants.CATEGORY_MAP)[props.data.category]

    let fetchBlogsByCategory = (e) => {
        props.history.push('/blogs')
        props.updateUrl(constants.categoryUrl(e))
    }

    return (
        <header className={headerStyle}>
            <div className="card-meta">
                <time className="timeago">{moment(props.data.date).format('ll')}</time> in <span className="div-link" onClick={fetchBlogsByCategory}>{categoryViewName}</span>
            </div>
            <Link to={`/article/${props.data.id}`}>
                <h4 className="card-title">{props.data.title}</h4>
            </Link>
        </header>
    )
}

export default withRouter(ArticleHeader)
