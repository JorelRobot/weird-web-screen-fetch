const sql = require('mssql');
const sqlconfig = {
    user: 'localadmin',
    password: 'genericpass',
    database: 'ScreenfetchUsers',
    server: 'localhost',
    port: 1433,
    //*/
    pool : {
        max : 10,
        min : 0,
        idleTimeoutMillis : 30000
    },
    //*/
    options : {
        encrypt : true,
        trustServerCertificate : true
    }
}


async function getConnection() {
    const pool = await sql.connect(sqlconfig);
    const result = await pool.request().query('SELECT 1');
    console.log(result);
}

getConnection();