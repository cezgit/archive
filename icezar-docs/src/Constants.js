
let hostname = process.env.NODE_ENV === 'production' ? 'www.icezar.com' : 'localhost'
// let hostport = process.env.NODE_ENV === 'production' ? '' : ':3000'

export const API_URL='http://'+hostname+':8080/icezar/'
export const MESSAGE_URL = 'http://' + hostname + ':8080/message'

export const CATEGORY_MAP = new Map([
  ['finance', 'Finance'],
  ['dev', 'Dev'],
  ['health', 'Health'],
  ['gadgets', 'Gadgets']
])
