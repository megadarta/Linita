const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/CommentController');

const comment = () => {
    router.post('/add', CommentController.addComment);

    router.get('/:storyId', CommentController.getComments);
    
    return router;
}

module.exports = comment;