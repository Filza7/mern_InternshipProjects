const express = require("express")
const app=express()
app.use((req,res,next)=>{
    console.log(`[LOG] ${req.method} ${req.url}`)
    next();
})


function authMiddleware(req,res,next){
    if(req.headers["x-auth"]==="admin"){
     next();
    }
    else{
        res.status(403).send("Unauthorized")
    }
}

app.get('/',(req,res)=>{
    console.log("Welcome")
    res.send("Welcome to middleware app code")
})

app.get('/admin',authMiddleware,(req,res)=>{
    res.send("ADMIN PANEL ")
})

app.get('/error',(req,res)=>{
    throw new Error("Error ocuured")
})

app.use((err, req, res, next) => {
    console.error("[ERROR]", err.message);
    res.status(500).send("Something went wrong!");
});

app.listen(3000, () => console.log("Server running on 3000"))