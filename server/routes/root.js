const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

const root = () => {
    router.get('/', (req,res) => {
        if(!req.isAuthenticated()) return res.json({ message: "Not Authenticated" });

        res.json(req.user);
    });

    router.post('/register', UserController.register);

    router.post('/login', UserController.authenticateLocal(), UserController.login);
    
    return router;
}

module.exports = root;