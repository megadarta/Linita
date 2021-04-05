const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

const root = () => {
    router.get('/', UserController.checkAuthentication);

    router.post('/register', UserController.register);

    router.post('/login', UserController.authenticateLocal(), UserController.checkAuthentication);

    router.delete('/logout', UserController.logout);
    
    return router;
}

module.exports = root;