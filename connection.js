const mysql = require('mysql');
const con = mysql.createConnection({
    //host: '34.93.73.173',
    host: 'localhost',
    port: 3306,
    user: 'docai',
    password: 'ncinga',
    database: 'DOCAIDB'
});

con.connect((err)=>{
    if(err){
        console.log("Connection not proper")
    }else{
        //console.log("connected");
    }
});

module.exports = con;