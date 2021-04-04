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
                comments: { 
                    type: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
                    default: []
                },
                loves: { type: Number, default: 0 }
            },

            //Model name
            'Story'
        );
    }
}

module.exports = Story;