const express = require('express')
const app = express()
const {webhookrouter,testBot} = require('./route/route')
app.use(express.json())
const port = 3000
app.use(webhookrouter)
app.use(testBot)
app.listen(port, ()=>{
    console.log("Server is running on port ", port)
})