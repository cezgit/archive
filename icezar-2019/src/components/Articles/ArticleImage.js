import React from 'react'

const ArticleImage = (props) => {
    
    let tryRequire = (path) => {
        try {
            return require(`${path}`)
        } catch (err) {
            return require('./images/default.jpg')
        }
    }
    let imgType =
      props.pageType === "brief" ? "card-img" : "card-img half"
    return (
      <img
        className={imgType}
        src={tryRequire(`./images/${props.imgPath}`)}
        alt={props.imgDesc}
      />
    );
}

export default ArticleImage
