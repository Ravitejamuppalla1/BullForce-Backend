const express = require('express')
const cors = require('cors')
const app = express()
const configureDB = require('./config/Database')
const route = require('./config/Route')
const port = '3020'
app.use(cors())
app.use(express.json())
app.use(route)

app.listen(port,(req,res)=>{
    console.log(`welcome to port ${port}`)
})
configureDB()
