const mongoose = require('mongoose')
// creating a database

const connection=mongoose.connect("mongodb://localhost:27017/dilzaibdynamic")

connection.then(()=>{
    console.log("connection")
}).catch((err)=>{
console.log("error")
})