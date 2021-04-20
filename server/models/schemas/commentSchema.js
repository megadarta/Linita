const mongoose = require('mongoose');
const { baseSchema } = require('./baseSchema')
const { Schema } = mongoose;

const commentSchema = new Schema({
    ...baseSchema,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    content: String,
    story: { type: Schema.Types.ObjectId, ref: 'Story' },
    likes: { type: Number, default: 0 }
});

module.exports = { commentSchema };