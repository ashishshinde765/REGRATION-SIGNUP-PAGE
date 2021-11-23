
/** THIS STEP IS USED EVERYWHERE, REMEMBER THIS STEP */

import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser:true,
    useUnifiedTopology: true
},() =>{
    console.log("DB CONNECTED SUCCESSFULLY!!")
})

//TO CRETE MODEL, WE NEED SCHEM
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

//NOW CRETE MODEL!! WITH userSchema
const User = new mongoose.model("User", userSchema)

//This is called Routes
app.post("/login", (req, res)=>{
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) =>{
        if(user){
                if(password === user.password){
                    res.send({message: "Login Successful", user: user})
                }else{
                    res.send({message: "Password didn't matched!!"})
                }
        }else{
            res.send({message: "User not Registered"})
        }
    })
})

app.post("/register", (req, res)=>{
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({ message: "already Registered!!"})
        }else{
            const user = new User({
                name,
                email,
                password
            })
            user.save(err =>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message: "Successfully Saved the Data in Mongodb!!, Login Now"})
                }
            })
        }
    })
    
})

app.listen(9002, ()=>{
    console.log("Port is listening at 9002")
})