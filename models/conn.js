const host = 'castor.db.elephantsql.com',
    database = 'mpyxcabl',
    user= 'mpyxcabl',
    password = 'VftNITIjkChSCZJe2PD2jWFANmVRYraT';

const pgp = require('pg-promise')({
    query: function (event) {
        console.log('Query:', event.query);
    }
});

const options = {
    host,
    database,
    user,
    password
}

const db = pgp(options);

module.exports = db;