const Model = require('../base/Model');
const bcrypt = require('bcrypt');
const { userSchema } = require('./schemas/userSchema');

class User extends Model {
    constructor() {
        super(userSchema, 'User');
    }

    register = async (body) => {
        try {
            const encryptedPassword = this.encryptPassword(body.password);

            //Edit document's password to the encrypted one
            const insertedDocument = this.editDocument(body, 'password', encryptedPassword);

            const newDocument = this.makeDocument(insertedDocument);
            
            const createdUser = await newDocument.save();

            return createdUser;
        } catch(e) {
            throw new Error(e);
        }
    }

    addStory = async (story) => {
        const { author } = story;

        //add story to author document
        author.stories.push(story._id);

        const updatedUser = await author.save();

        return updatedUser;
    }

    addLikedStory = async (userID, storyID) => {
        const foundUser = await this.Model.findById(userID);

        foundUser.likes.set(storyID, storyID);

        return await foundUser.save();
    }

    removeLikedStory = async (userID, storyID) => {
        const foundUser = await this.Model.findById(userID);

        foundUser.likes.delete(storyID);

        return await foundUser.save();
    }


    encryptPassword(password) {
        const hash = bcrypt.hashSync(password, 10);

        return hash;
    }

    comparePassword(password, encryptedPassword) {
        const isValid = bcrypt.compareSync(password, encryptedPassword);

        return isValid;
    }
}

module.exports = User;