const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/CommentController');

const comment = () => {
    router.post('/add', CommentController.create);

    router.put('/upvote', CommentController.upvote);

    router.put('/downvote', CommentController.downvote);
    
    router.get('/:storyId', CommentController.storyComments);
    
    return router;
}

module.exports = comment;