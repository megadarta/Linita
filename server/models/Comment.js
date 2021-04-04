const mongoose = require('mongoose');
const Model = require('../base/Model');
const { Schema } = mongoose;

class Comment extends Model {
    constructor() {
        super(
            //Schema
            {
                author: { type: Schema.Types.ObjectId, ref: 'User' },
                content: String,
                commented_story: { type: Schema.Types.ObjectId, ref: "Story" },
                loves: Number,
            },

            //Model name
            'Comment'
        );
    }
}

module.exports = Comment;