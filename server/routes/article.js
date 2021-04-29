const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/ArticleController');

const article = () => {
    router.post('/add', ArticleController.create);

    router.get('/', ArticleController.index);

    router.get('/view/:articleID', ArticleController.view);


    return router;
}

module.exports = article;