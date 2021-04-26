const Model = require('../base/Model');
const { commentSchema } = require('./schemas/commentSchema');

class Comment extends Model {
    constructor() {
        super(commentSchema, 'Comment');
    }

    getAllFromStory = async (storyID) => await this.Model.find(
        { story: storyID })
    .populate('user')
    .sort({ 'created_at': 'desc' });

    create = async (body) => {
        const document = this.makeDocument(body);

        const postedComment = await document.save();

        return postedComment;
    }
}

module.exports = Comment;