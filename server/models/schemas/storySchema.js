const mongoose = require('mongoose');
const { baseSchema } = require('./baseSchema')
const { Schema } = mongoose;

const storySchema = new Schema({
    ...baseSchema,
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    anonimity: Boolean,
    title: String,
    content: String,
    comments: { 
        type: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
        default: []
    },
    likes: { type: Number, default: 0 },
});

module.exports = { storySchema };