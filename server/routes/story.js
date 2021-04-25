const StoryController = require('../controllers/StoryController');
const express = require('express');
const router = express.Router();

const story = () => {
    router.get('/one/:id', StoryController.oneStory);

    router.get('/all', StoryController.allStories);

    router.post('/add', StoryController.addStory);
    
    router.put('/like', StoryController.addLike);

    router.put('/unlike', StoryController.unLike);

    return router;
}

module.exports = story;