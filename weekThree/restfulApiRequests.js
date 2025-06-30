const express =require ('express')
const app=express()

app.use(express.json())
const users=[]

app.get('/',(req,res)=>{
    const {name,age}=req.body || {}
    if(!name && !age){
        return res.json(users)
    }
    const filtered=users.filter(user=>
        (!name || user.name==name) && (!age || user.age==age)
    )
    console.log("GET Request received",req.body)
    res.json(filtered)
})

app.post('/',(req,res)=>{
    const {name,age}=req.body
    if(!age || !name){
        return res.status(400).send("Name and age are required fields")
    }
  else{
    users.push({name,age})
    res.send(`User ${name} added `)
  }
})

app.put('/',(req,res)=>{
    const {name,newName,newAge}=req.body
    if (!name || (!newName && !newAge)){
        return res.status(400).send("Enter Name and age of user that needs to be updated")
    }
    else{
        const updated=users.find(user=>user.name==name )
        if(!updated){
            return res.status(400).send("Not such user exists")
        }
        if(newName) updated.name=newName
        if(newAge) updated.age=newAge
        res.send(`User ${name} updated to ${updated.name}, age ${updated.age}`);
    }
})

app.delete('/',(req,res)=>{
    const {name}=req.body
    if(!name ){
        return res.status(400).send("Enter name of the user to be deleted")
    }
    let index=users.findIndex(u=>u.name===name)
    if (index===-1){
        return res.status(400).send("User does not exist in system")
    }
    else{
        users.splice(index,1)
        res.send(`User ${name} deleted successfully`)
    }
})

app.listen(3000,()=>{
    console.log("Server is ready")
})