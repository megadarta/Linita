const Model = require('../base/Model');
const { articleSchema } = require('./schemas/articleSchema');

class Article extends Model {
    constructor() {
        super(articleSchema, 'Article');
    }

    create = async (body) => {
        const document = this.makeDocument(body);

        const postedArticle = await document.save();

        return postedArticle;
    }
}

module.exports = Article;