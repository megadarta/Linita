const Article = require('../models/Article');

const article = new Article();

class ArticleController {
    static create = async (req, res) => {
        const { title, content, imagePath, imageAlt, reference } = req.body;

        const document = {
            title,
            content,
            image: {
                path: imagePath,
                alt: imageAlt
            },
            reference
        }

        const newArticle = await article.create(document);

        res.json(newArticle);
    }

    static index = async (req, res) => {
        const articles = await article.getAll();

        res.json({ articles });
    }

    static view = async (req, res) => {
        const { articleID } = req.params;

        const foundArticle = await article.getOneById(articleID);

        res.json(foundArticle);
    }
}

module.exports = ArticleController;