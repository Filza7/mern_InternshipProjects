const express = require('express');
const app = express();

app.use(express.json());

app.get('/user', (req, res) => {
    res.json({ name: 'Filza', age: 22 });
});

app.post('/user', (req, res) => {
    const userData = req.body;
    console.log("Received:", userData);
    res.send(`User ${userData.name} received successfully!`);
});

app.get('/', (req, res) => {
  res.send('Welcome! Use POST to send data.');
});

app.post('/',(req,res)=>{
const data =req.body
console.log("posted on /",data)
res.send(`User ${data.name} received manually `)
})

app.listen(3000, () => {
    console.log('🚀 Server is running at port 3000');
});
