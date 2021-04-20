const Model = require('../base/Model');
const { storySchema } = require('./schemas/storySchema');

class Story extends Model {
    constructor() {
        super(storySchema, 'Story');
    }

    getAll = async () => await this.Model.find({}).populate('author');

    getOne = async (id) => await this.Model.findById(id).populate('author').populate('comments');

    postStory = async (body) => {
        const document = this.makeDocument(body);

        const postedStory = await document.save();

        return postedStory;
    }

    giveLike = async (storyID) => await this.Model.findByIdAndUpdate(storyID, { $inc : { likes: 1 } }, { new: true });
    
    removeLike = async (storyID) => await this.Model.findByIdAndUpdate(storyID, { $inc : { likes: -1 } }, { new: true });

    receivedComment = async (storyID, commentID) => await this.Model.findByIdAndUpdate(
        storyID, 
        { $push: { comments: commentID }}, 
        { new: true }
    );
}

module.exports = Story;