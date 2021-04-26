const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

const root = () => {
    router.all('/', UserController.checkAuthentication);

    router.get('/author/:storyID', UserController.getAuthor);

    router.post('/register', UserController.register);

    router.post('/login', UserController.authenticateLocal(), UserController.checkAuthentication);
    
    router.delete('/logout', UserController.logout);

    router.put('/add-detail', UserController.addDetails);
    
    return router;
}

module.exports = root;