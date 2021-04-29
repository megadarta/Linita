const mongoose = require('mongoose');
const { baseSchema } = require('./baseSchema')
const { Schema } = mongoose;

const articleSchema = new Schema({
    ...baseSchema,
    title: String,
    content: String,
    image: { 
        path: String,
        alt: String 
    },
    reference: String
});

module.exports = { articleSchema };