import React from 'react'


const BlogImage = props => {
  
  return <div className="col-5 card-img-right border border-left-0 bg-img-hero" 
    style={{ backgroundImage: `url(${props.imgPath})` }} 
  ></div>
}

export default BlogImage