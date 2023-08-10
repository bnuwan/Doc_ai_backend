//const req = require('express/lib/request');
const con = require('./connection');
const express = require('express');
//const res = require('express/lib/response');
const app = express();
const axios = require('axios');

const columns = ["Employee Social Security Number","Employer identification number" ]
app.use(express.json());

 app.get ('/', (req, res)=> {
    con.query("select * from doc_tbl;", (err, result)=>{
        if(err){
            res.send('Error');
        }else{
            res.send(result)
        }
    });
 });

 /*
 axios.post('/').then(res => {
   console.log(res.data)
   console.log("====================================", res);
   res.send();
   saveValues(res.data);
}).catch(err => console.log(err));

*/


 app.post ('/records', (req, res)=>{
    //console.log("post API working");
    //console.log("====================================", req);
    saveValues(req.body);
    res.send("Sucussfully saved..!");
    res.end();
 });


 function extractColumn(data, columnName ){
   
    let index = data.findIndex(item => item.name === columnName);
    if (index > -1){
        return data[index].value;
    }
}

function saveValues(data){
    console.log("********************************", data);
    let col1 = "Employee Social Security Number";
    let col2 = "Employer identification number";
    let col3 = "Employer's details";
    let col4 = "Control number";
    let col5 = "Employee's details";
    let value1 = extractColumn(data, col1);
    let value2 = extractColumn(data, col2);
    let value3= extractColumn(data, col3);
    let value4 = extractColumn(data, col4);
    let value5 = extractColumn(data, col5);

    let query = `INSERT INTO doc_tbl VALUES('${value1}', '${value2}', '${value3}', '${value4}', '${value5}')`;
    con.query(query)
}

app.listen(4200);
