const StoryController = require('../controllers/StoryController');
const express = require('express');
const router = express.Router();

const story = () => {
    router.get('/', StoryController.index);

    router.get('/view/:id', StoryController.view);

    router.get('/top-three', StoryController.topThree);

    router.post('/create', StoryController.create);
    
    router.put('/like', StoryController.like);

    router.put('/unlike', StoryController.unLike);

    router.delete('/delete', StoryController.delete);

    return router;
}

module.exports = story;