const Model = require('../base/Model');
const { commentSchema } = require('./schemas/commentSchema');

class Comment extends Model {
    constructor() {
        super(commentSchema, 'Comment');
    }

    getAllfromStory = async (storyID) => await this.Model.find({ story: storyID }).populate('user');

    postComment = async (body) => {
        const document = this.makeDocument(body);

        const postedComment = await document.save();

        return postedComment;
    }
}

module.exports = Comment;