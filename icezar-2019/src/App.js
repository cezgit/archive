import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

import './scss/milo.scss'
import Header from './components/Header'
import Articles from './components/Articles'
import Article from './components/Articles/Article'
import ArticleBrief from './components/Articles/ArticleBrief'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'

import * as constants from './Constants'
import _ from 'lodash'

const App = () => {

  const [blogs, setBlogs] = useState({ leftBlogs: [], rightBlogs: [] })
  const [url, setUrl] = useState(constants.API_URL + 'blogs')

  console.log('App url: '+url)
  useEffect(() => {
    const getData = async () => {
      console.log('useEffect is fetching url: ' + url)
      const response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await response.json()
      let blogs = data.blogs
      let leftBlogs = [], rightBlogs = []
      if (blogs.length > 0) {
        _.forEach(blogs, (val, i) => {
          let blog = <ArticleBrief data={val} key={val.id} updateUrl={setUrl} />
          if (i % 2 === 0) leftBlogs.push(blog)
          else rightBlogs.push(blog)
        })
      }
      setBlogs({ leftBlogs: leftBlogs, rightBlogs: rightBlogs })      
    }
    getData()
  }, [url])  

  return (
    <div>
      <Header setUrl={setUrl} />
      <Route exact path={["/", "/search", "/blogs"]} render={props => <Articles blogs={blogs} updateUrl={setUrl} /> }/>
      <Route path="/article/:id" render={props => <Article {...props} updateUrl={setUrl} />} />
      <Route path="/about" render={props => <About {...props} />} /> 
      <Route path="/contact" render={props => <Contact {...props} />} />
      <Footer/>
    </div>
  )
}

export default App
