const express = require('express')
const app = express()
const {webhookrouter,testBot} = require('./route/route')
app.use(express.json())
app.use(webhookrouter)
app.use(testBot)
const port = 3000
app.listen(port, ()=>{
    console.log("Server is running on port ", port)
})
