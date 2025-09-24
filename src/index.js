import dotenv from 'dotenv'
import app from './app.js'
import connectDB from './db/db.js'

//Setup Environment Variable
dotenv.config()

// Running Server
const port = process.env.PORT || 5000

//Connect DB
connectDB()
.then(()=>{
    app.listen(port, ()=>{
        console.log("Server is running on port : ", port)
    })
})
