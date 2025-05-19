const express = require('express');
const router = express.Router();
const User = require('./user');

router.post('/', async (req, res) => {
    try {
        const { username, email, age } = req.body;
        const newUser = new User({ username, email, age });
        await newUser.save();
        res.status(201).json({ message: 'User created', user: newUser });
    } catch (err) {
        res.status(500).json({ message: 'Error creating user', error: err.message });
    }
});

module.exports = router;
