const Model = require('../base/Model');
const { commentSchema } = require('./schemas/commentSchema');

class Comment extends Model {
    constructor() {
        super(commentSchema, 'Comment');
    }
}

module.exports = Comment;