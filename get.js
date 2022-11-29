const { response } = require("express");
const express = require("express");
const mysql = require("mysql");
const app = express();

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Shylaraju1994',
    database:'doctors_db'
})

con.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Connected!!!")
    }
})

app.get("/fetch",(req,res)=>{
    con.query("select * from Doctor_info",function(err,result,fields){
        if(err)
        {
            console.log(err)
        }else{
            //res.send(result)
            console.log(JSON.parse(JSON.stringify(result)))
        }
    })
})

app.listen(3000,(err)=>{
    if(err)
    {
        console.log(err)
    }else{
        console.log("listening on port 3000")
    }
})
