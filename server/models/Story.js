const Model = require('../base/Model');
const { storySchema } = require('./schemas/storySchema');

class Story extends Model {
    constructor() {
        super(storySchema, 'Story');
    }

    getAll = async () => await this.Model.find().populate('author');

    topThree = async () => await this.Model.find().populate('author').sort({ 'likes': 'desc' }).limit(3);

    // getOne = async (id) => await this.Model.findById(id).populate('author');

    create = async (body) => {
        const document = this.makeDocument(body);

        const postedStory = await document.save();

        return postedStory;
    }

    giveLike = async (storyID) => await this.Model.findByIdAndUpdate(
        storyID, 
        { $inc : { likes: 1 } },  //increment like by 1
        { new: true } 
    );
    
    removeLike = async (storyID) => await this.Model.findByIdAndUpdate(
        storyID,  
        { $inc : { likes: -1 } }, //decrement like by 1
        { new: true } 
    );

    addComent = async (storyID, commentID) => await this.Model.findByIdAndUpdate(
        storyID, 
        { $push: { comments: commentID }}, //add story's comment
        { new: true } 
    );

    delete = async (storyID) => await this.Model.findByIdAndDelete(storyID);
}

module.exports = Story;