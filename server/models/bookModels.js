const { Pool } = require('pg');

//const PG_URI = 'postgres://dkkcsyzq:kmL7sCZe-lVTlpTeLLWeGMTfmUQK8ejp@batyr.db.elephantsql.com/dkkcsyzq';
const PG_URI = 'postgres://ntqrlwui:nJ-2TwKBWoKpxBEv1u0z1SQXAh_X6UoP@rajje.db.elephantsql.com/ntqrlwui';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
