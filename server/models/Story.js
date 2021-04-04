const mongoose = require('mongoose');
const Model = require('../base/Model');
const { Schema } = mongoose;

class Story extends Model {
    constructor() {
        super(
            //Schema
            {
                author: { type: Schema.Types.ObjectId, ref: 'User' },
                content: String,
                comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
                loves: Number,
            },

            //Model name
            'Story'
        );
    }
}

module.exports = Story;