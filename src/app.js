const express = require('express')
require('./db/conn')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, resp) => {
    resp.send("Hii i'm awesome")
})

app.listen(port, () => {
    console.log(`Port Is Running On Port No : ${port}`)
})