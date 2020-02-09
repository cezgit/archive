import React from 'react'

const ArticleLayout = (props) => {

  return (
    <main className="main pt-4" role="main">
        <div className="container">
            <div className="row">
                {props.children}
            </div>
        </div>
    </main>
    )   
}

export default ArticleLayout