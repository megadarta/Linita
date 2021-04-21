const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

const root = () => {
    router.all('/', UserController.checkAuthentication);

    router.post('/register', UserController.register);

    router.post('/login', UserController.authenticateLocal(), UserController.checkAuthentication);
    
    router.delete('/logout', UserController.logout);

    router.put('/add-detail', UserController.addNamaNIK);
    
    return router;
}

module.exports = root;