const mongoose = require('mongoose');
const { baseSchema } = require('./baseSchema')
const { Schema } = mongoose;

const userSchema = new Schema({
    ...baseSchema,
    username: String,
    password: String,
    email: String,
    fullname: { type: String, default: '' },
    nik: { type: String, default: '' },
    stories: { 
        type: [{ type: Schema.Types.ObjectId, ref: 'Story' }],
        default: [] 
    },
    likes: {
        type: Map,
        of: { type: Schema.Types.ObjectId, ref: 'Story' },
        default: {}
    },
    comments: { 
        type: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
        default: []
    } 
});

module.exports = { userSchema };
