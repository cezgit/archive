import fetch from 'node-fetch';
import winston from 'winston';

winston.add(winston.transports.File, { filename: 'tss.log' });
let contactApiUrl = 'https://us-central1-topstreaming-174315.cloudfunctions.net/contacts';

const saveContactInfo = (data) => {
  return new Promise((resolve, reject) => {
    fetch(contactApiUrl, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data)
    })
    .then(result => {
      result.ok ? resolve() : reject();
    })
    .catch(error => {
      winston.log(error);
      reject();
    });
  })
}

export {
  saveContactInfo
}
