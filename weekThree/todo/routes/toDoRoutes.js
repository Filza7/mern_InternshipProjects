const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Todo = require('../model/todo');


router.post('/', async (req, res) => {
    try {
        const todo = new Todo(req.body);
        await todo.save();
        res.status(201).json(todo);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.get('/:id', async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Todo not found' });
    }

    try {
        const todo = await Todo.findById(id);
        if (!todo) return res.status(404).json({ error: 'Todo not found' });
        res.json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.put('/:id', async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Todo not found' });
    }

    try {
        const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
        if (!todo) return res.status(404).json({ error: 'Todo not found' });
        res.json(todo);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Todo not found' });
    }

    try {
        console.log("helo")
        const result = await Todo.findByIdAndDelete(id);
        if (!result) return res.status(404).json({ error: 'Todo not found' });
        res.json({ message: 'Todo deleted', todo: result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
