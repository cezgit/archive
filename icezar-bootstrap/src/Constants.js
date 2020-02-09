let hostname = process.env.NODE_ENV === 'production' ? 'www.icezar.com' : 'localhost';
let hostport = process.env.NODE_ENV === 'production' ? '' : ':3000';

export const API_URL='http://'+hostname+':8080/icezar/';
