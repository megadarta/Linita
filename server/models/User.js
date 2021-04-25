const Model = require('../base/Model');
const bcrypt = require('bcrypt');
const { userSchema } = require('./schemas/userSchema');

class User extends Model {
    constructor() {
        super(userSchema, 'User');
    }

    create = async (document) => {
        try {
            document.password = this.encryptPassword(document.password);

            const newDocument = this.makeDocument(document);
            
            const createdUser = await newDocument.save();

            return createdUser;
        } catch(e) {
            throw new Error(e);
        }
    }

    addStory = async (author, story) => {
        const updatedUser = await this.Model.findByIdAndUpdate(
            author, 
            { $push: { stories: story._id } }, 
            { new: true }
        );

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

    addComent = async (userID, commentID) => {
        const foundUser = await this.Model.findByIdAndUpdate(
            userID, 
            { $push: { comments: commentID }}, 
            { new: true }
        );
        
        return foundUser;
    }

    addDetails = async (userID, fullname, nik) => {
        const updatedUser = await this.Model.findByIdAndUpdate(
            userID, 
            { fullname, nik }, 
            { new: true }
        );

        return updatedUser;
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