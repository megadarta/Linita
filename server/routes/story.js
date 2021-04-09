const express = require('express');
const router = express.Router();
const StoryController = require('../controllers/StoryController');

const story = () => {
    router.post('/add', StoryController.postStory);
    
    router.put('/love');
    return router;
}

module.exports = story;