const mongoose = require('mongoose');
const { Schema } = mongoose;

class Model {
    constructor(schema, modelName) {
        //define passed schema added with created and updated timestamp field
        this.schema = new Schema({
            ...schema, 
            created_at: { type: Date, default: Date.now },
            updated_at: { type: Date, default: Date.now }
        });
        
        this.Model = mongoose.model(modelName, this.schema);
    }

    //Make new document
    makeDocument = (document) => new this.Model(document);

    getModel = () => this.Model;

    //edit a document then return the new one
    editDocument = (document, key, value) => {
        const editedDocument = {
            ...document,
            [key]: value
        }

        return editedDocument;
    }
}

module.exports = Model;