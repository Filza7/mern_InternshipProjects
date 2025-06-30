const express = require('express');
const app = express();

app.use(express.json());

let users = [];

app.get('/user', (req, res) => {
    res.json(users);
});

app.post('/user', (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    res.send('User added successfully');
});

app.put('/user', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (user) {
        user.password = password;
        res.send('Password updated successfully');
    } else {
        res.status(404).send('User not found');
    }
});

app.delete('/user', (req, res) => {
    const { username } = req.body;
    const initialLength = users.length;
    users = users.filter(u => u.username !== username);
    if (users.length < initialLength) {
        res.send('User deleted successfully');
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
