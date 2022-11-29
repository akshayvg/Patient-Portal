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

app.put("/update/:id",(req,res)=>{
    const ID = req.params.ID;
    const NAME = req.body.NAME;
    const SPECIALIZATION = req.body.SPECIALIZATION;
    const CONTACT_NUMBER = req.body.CONTACT_NUMBER;
    const AGE = req.body.AGE;
    const PROFILEPICTURE = req.body.PROFILEPICTURE;

    con.query('Update Doctors_info SET SPECIALIZATION=?,CONTACT_NUMBER=? where ID=?',[SPECIALIZATION,CONTACT_NUMBER,ID],
    (err,result)=>{
        if(err)
        {
            console.log(err)
        }else{
            res.send("Updated!!!")
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