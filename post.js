var express = require("express")
var mysql = require("mysql")
var app = express()

app.use(express.json())

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

app.post('/post',(req,res)=>{
    const ID = req.body.ID;
    const NAME = req.body.NAME;
    const SPECIALIZATION = req.body.SPECIALIZATION;
    const CONTACT_NUMBER = req.body.CONTACT_NUMBER;
    const AGE = req.body.AGE;
    const PROFILE_PICTURE = req.body.PROFILE_PICTURE;

    con.query('insert into Doctors_info values(?,?,?,?,?,?)',[ID,NAME,SPECIALIZATION,CONTACT_NUMBER,AGE,PROFILE_PICTURE],
    (err,res)=>{
        if(err){
            console.log(err)
        }else{
            res.json({data:"Posted"})
        }
    })
})

app.listen(3000,(err)=>{
    if(err)
    {
        console.log(err)
    }else{
        console.log("ON Port 3000")
    }
})