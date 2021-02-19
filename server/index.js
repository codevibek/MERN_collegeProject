const express =  require('express')
const app  = express()

const mysql = require('mysql')
const cors = require('cors')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials:true
}))
app.use(express.json())

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))

app.use(session({
    key:"userId",
    secret:"college",
    resave:false, 
    saveUninitialized:false,
    cookie:{
        expires:60*60*24*7,
    }
}))

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
app.post('/rate',(req,res)=>{
    const u_id = req.body.u_id;
    const id = req.body.id;
    const rate = req.body.inputRating;
    const review = req.body.inputReview;
    db.query('SELECT * FROM tbl_userrate WHERE u_id=?',[u_id],(err,result)=>{
        if(result.length>0){
            db.query('UPDATE tbl_userrate SET u_rate=?,  u_review=? WHERE u_id= ?',[rate,review,u_id],
            (err,resul)=>{
                if(err){
                    console.log(err)
                }else{
                    res.send("Rating Updated Successfully")
                }
            })
        }
        else{
            db.query('INSERT INTO tbl_userrate (u_id,c_id,u_rate,u_review) VALUES (?,?,?,?)',
            [u_id,id,rate,review],(err,resul)=>{
                if(err){
                    console.log(err)
                }else{
                    res.send("Rated Successfully")
                }
            })
        }
    })
   
})
app.post('/register',(req, res) => {
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;

    db.query('SELECT * FROM tbl_user WHERE u_email=?',email,(err,result)=>{
        if(result.length>0){
            res.send("User Already Exist")
        }
        else{
            db.query("INSERT INTO tbl_user (u_name, u_email, u_password) VALUES (?,?,?)",[userName,email,password],(err,result) => {
                if(err){
                    res.send(err)

                }
                else{
                    res.send("User registered Successfully")
                }
            })
        }
    })


   
})
app.get('/user',(req,res)=>{
    if(req.session.user){
        res.send({loggedIn:true, user:req.session.user})
    }else{
        res.send({loggedIn:false})
    }
})
app.post('/userlogin',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;


    db.query("SELECT * FROM tbl_user WHERE u_email= ? AND u_password= ?",[email,password],(err,result) => {
        if(err){
            res.send({err: err})

        }else{
            if(result.length>0){
                
                req.session.user = result
                console.log(req.session.user)
                res.send({message:"success"})
            }else{
                res.send({message:"User doesn't exist"})
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