const mongoose = require('mongoose');
const Model = require('../base/Model');
const { Schema } = mongoose;

class Story extends Model {
    constructor() {
        super(
            //Schema
            {
                author: { type: Schema.Types.ObjectId, ref: 'User' },
                title: String,
                content: String,
                comments: { 
                    type: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
                    default: []
                },
                loves: { type: Number, default: 0 },
                anonimity: String
            },

            //Model name
            'Story'
        );
    }

    postStory = async (body) => {
        const document = this.makeDocument(body);

        const postedStory = await this.save(document);

        //populate author field
        const populatedStory = await this.populate(postedStory, 'author');

        return populatedStory;
    }

    addStoryToAuthor = async (story) => {
        //add story to author document
        story.author.stories.push(story._id);

        const postedUser = await this.save(story.author);

        return postedUser;
    }
}

module.exports = Story;