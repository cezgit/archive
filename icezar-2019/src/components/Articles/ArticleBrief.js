import React from 'react'
import { withRouter, Link } from "react-router-dom";

import ArticleHeader from './ArticleHeader'
import ArticleImage from './ArticleImage'
import Tags from './Tags'
import * as constants from '../../Constants'
import { link } from 'fs';

const ArticleBrief = (props) => {

    let data = props.data
    let words = data.content.split(' ')
    let toBeContinued = words.length > constants.MAX_ARTICLE_BRIEF_CHARS
    let linkToArticle = toBeContinued ? <Link to={`/article/${data.id}`}>Continue to article...</Link> : ''
    
    let maybeBriefContent = toBeContinued ? words
        .slice(0, constants.MAX_ARTICLE_BRIEF_CHARS)
        .join(
            ' '
        ) +'...' : data.content

    let content = { __html: maybeBriefContent } 
    let imgTag = data.img ?
        <ArticleImage imgPath={data.img} imgDesc={data.imgDesc} pageType='brief' /> : ''

    return (
      <article className='card mb-4'>
        <ArticleHeader {...props} data={data} />
        {imgTag}
        <div className='card-body'>
          <span className='card-text' dangerouslySetInnerHTML={content}></span>
          <p className='div-link'>{linkToArticle}</p>
          <div className='d-flex justify-content-between'>
            <Tags tags={data.tags} updateUrl={props.updateUrl} />
          </div>
        </div>
      </article>
    );
}

export default withRouter(ArticleBrief)
