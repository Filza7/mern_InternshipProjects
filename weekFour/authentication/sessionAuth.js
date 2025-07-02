const express=require("express")
const session =require("express-session")
const app=express()

app.use(express.json())
app.use(session({
    secret:'123er',
    resave:false,
    saveUninitialized:true
}))

app.post('/login',(req,res)=>{
    const {username, password}=req.body
    if(username==='filza' && password==='12344'){
        req.session.user={username}
        res.send("Login successful")
    }
    else{
        res.status(401).send("Invalid username or password")
    }
})

app.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.send(`Welcom ${req.session.user}`)
    }
    else{
        res.status(401).send("Please login first")
    }
})

app.delete('/logout',(req,res)=>{
    req.session.destroy()
    res.send('user logged out successfully')
})

app.listen(3000,()=>{
    console.log("Server started on port 3000")
})