const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: '2606',
    host: 'localhost',
    port: '5432',
    database: 'diplom'
})

module.exports = pool