
let hostname = process.env.NODE_ENV === 'production' ? 'www.icezar.com' : 'localhost'
// let hostport = process.env.NODE_ENV === 'production' ? '' : ':3000'

export const API_URL = 'http://' + hostname + ':8081/icezar/'
export const MESSAGE_URL = 'http://' + hostname + ':8081/message/save'

export const CATEGORY_MAP = {
    All: '',
    Dev: 'dev',
    Finance: 'finance',
    Music: 'music',
    Deals: 'deals'
}

export const categoryUrl = (e) => {
    e.preventDefault()
    let cat = e.target.innerHTML
    let url = API_URL + 'blogs'
    if (cat !== 'All')
        url += '?category=' + CATEGORY_MAP[cat]
    return url
}

export const MAX_ARTICLE_BRIEF_CHARS = 75