import dotenv from 'dotenv'
import express from 'express'
import connectDB from './db/db.js'

//Create Express 
const app = express()

//Setup Environment Variable
dotenv.config()

//Connect DB
connectDB()

app.get('/', (req, res)=>{
    res.send("Server is Running...")
})


// Running Server
const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log("Server is running on port : ", port)
})