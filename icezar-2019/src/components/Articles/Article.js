import React, { useState, useEffect} from 'react'

import ArticleLayout from './ArticleLayout'
import ArticleHeader from './ArticleHeader'
import ArticleImage from './ArticleImage'
import ArticleNav from './ArticleNav'
import Tags from './Tags'

import * as constants from '../../Constants'
import queryString from 'query-string'

const Article = (props) => {

  const [blog, setBlog] = useState(null)

  useEffect(() => {
    let queryParams = { blogId: props.match.params.id }
    let url = constants.API_URL + 'blog?' + queryString.stringify(queryParams)

    const getData = async () => {
      console.log('useEffect is fetching url: ' + url)
      const response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      const jsonResponse = await response.json()        
      setBlog(jsonResponse.blog)      
    }
    getData()
  }, [props])
  
  if(!blog) {
    return <ArticleLayout><div className='col-md-9'></div></ArticleLayout> 
  }

  let content = { __html: blog.content }    
  
  let imgTag = blog.img ?
    <ArticleImage imgPath={blog.img} imgDesc={blog.imgDesc} pageType='full' /> : ''

  return <ArticleLayout>
    <div className='col-md-9'>
      <article className='card mb-4'>
        <ArticleHeader {...props} data={blog} align='center' />
        <span className="text-center">{imgTag}</span>
        <div className='card-body'>
          <div className='card-text' dangerouslySetInnerHTML={content} />
          <div className='d-flex justify-content-between'>
            <Tags tags={blog.tags} updateUrl={props.updateUrl} />
          </div>
        </div>
      </article>
    </div>
    <ArticleNav {...props} updateUrl={props.updateUrl} />
  </ArticleLayout>    
}

export default Article
