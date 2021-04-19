const express = require('express');
const router = express.Router();
const StoryController = require('../controllers/StoryController');

const story = () => {
    router.post('/add', StoryController.addStory);
    
    router.put('/like', StoryController.addLike);

    router.put('/unlike', StoryController.unLike);

    return router;
}

module.exports = story;