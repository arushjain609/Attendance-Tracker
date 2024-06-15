require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const courseRoutes = require('./routes/course')
const cors = require('cors')

const app = express()
app.use(cors())

app.use(express.json())

app.use('/', courseRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(3000,() =>{
        console.log('connected to db and listening on port 3000')
    })
})
.catch((error) => {
    console.log(error)
})


