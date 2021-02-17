const express =  require('express')
const app  = express()

const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"intermediate_project"
})


app.post('/create',(req , res) =>{
    const name = req.body.name;
    const noOfStudent = req.body.noOfStudent;
    const fee = req.body.fee;
    const location = req.body.location;
    const facility = req.body.facility;
    const pastResult = req.body.pastResult;
    const eca = req.body.eca;
    const email = req.body.email;
    const phone = req.body.phone;

    db.query('INSERT INTO tbl_college (c_name, c_noofstudents, c_fee, c_location, c_facility, c_pastresult, c_ECA, c_email, c_phone) VALUES (?,?,?,?,?,?,?,?,?)',
     [name, noOfStudent, fee, location, facility, pastResult, eca,email,phone], (err,result) => {
         if (err){
             console.log(err)
         }else{
             res.send("value Inserted")
         }
     })
})
app.post('/register',(req, res) => {
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;



    db.query("INSERT INTO tbl_user (u_name, u_email, u_password) VALUES (?,?,?)",[userName,email,password],(err,result) => {
        console.log(err)
    })
})
app.post('/userlogin',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;


    db.query("SELECT * FROM tbl_user WHERE u_email= ? AND u_password= ?",[email,password],(err,result) => {
        if(err){
            res.send({err: err})

        }else{
            if(result.length>0){
                res.send({message:"success"})
            }else{
                res.send({message:"wrong Combiantion"})
            }}
})
})
app.get('/colleges',(req,res) => {
    db.query("SELECT * FROM tbl_college",(err,result) =>{
        if(err){
            console.log(err)

        }else{
            res.send(result)
        }
    })
})
app.get('/colleges/:id',(req,res) => {
    const id = req.params.id
    db.query("SELECT * FROM tbl_college WHERE c_id = ?",[id],(err,result) =>{
        if(err){
            console.log(err)

        }else{
            res.send(result)
            
        }
    })
})
app.put('/update',(req,res) => {
    const id = req.body.id
    const name=req.body.name
    console.log(name,id)
    db.query("UPDATE tbl_college SET  c_name= ? WHERE c_id= ?",[name,id],(err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.delete('/delete/:id',(req,res)=>{
    const id = req.params.id
    db.query("DELETE FROM tbl_college WHERE c_id= ?",id,(err,result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})
app.listen(3001,()=>{
    console.log("servers running")
})