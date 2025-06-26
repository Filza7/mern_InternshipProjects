const express = require('express')
const app1=express()
let port=3000

app1.get('/',(req,res) =>{
    console.log("A user visited the root URL");
    res.send('Hello World')
})

app1.listen(port,()=>{
    console.log(`The data is sent to port ${port}`)
})