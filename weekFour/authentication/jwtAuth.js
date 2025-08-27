const express=require("express")
const jwt=require("jsonwebtoken")
const app=express()

const SECRET_KEY = 'mySecret456'

app.use(express.json())
app.post('/login',(req,res)=>{
    const {username,password}=req.body
    if(username==='filza' && password==='123'){
     const token= jwt.sign({username},SECRET_KEY,{expiresIn: '1h'})
     res.json({token})
    }
    else{
        res.status(401).send("Invalid credientials")
    }
})

function verifyToken(req,res,next){
    const authHeader=req.header('authorization')
    const token =authHeader && authHeader.split(' ')[1]
    if(!token){
        return res.status(401).send("Access denied")
    }

try{
    const verifies=jwt.verify(token , SECRET_KEY)
    req.user=verifies
    next()
}
catch(error){
    res.status(403).send(`Error Occured ${error}`)
}
}

app.get('/dashboard',verifyToken,(req,res)=>{
    res.send(`Hello ${req.user.username}`)
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
})