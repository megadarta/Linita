const mongoose = require('mongoose');
const Model = require('../base/Model');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

class User extends Model {
    constructor() {
        super(
            //Schema
            {
                username: String,
                fullname: String,
                password: String,
                email: String,
                stories: { 
                    type: [{ type: Schema.Types.ObjectId, ref: 'Story' }],
                    default: [] 
                },
                comments: { 
                    type: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
                    default: [] 
                }
            },

            //Model name
            'User' 
        );
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