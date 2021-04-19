const Model = require('../base/Model');
const { storySchema } = require('./schemas/storySchema');

class Story extends Model {
    constructor() {
        super(storySchema, 'Story');
    }

    postStory = async (body) => {
        const document = this.makeDocument(body);

        const postedStory = await document.save();

        return populatedStory;
    }

    giveLike = async (storyID) => await this.Model.findByIdAndUpdate(storyID, { $inc : { likes: 1 } }, { new: true });
    
    removeLike = async (storyID) => await this.Model.findByIdAndUpdate(storyID, { $inc : { likes: -1 } }, { new: true });
}

module.exports = Story;