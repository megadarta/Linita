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

    //Saving document
    async save(document) {
        const newDocument = new this.Model(document);

        try {
            const createdDocument = await newDocument.save();

            return createdDocument;
        } catch(e) {
            throw new Error(e);
        }
    }

    //Getting document by query
    async findOne(query) {
        try {
            const foundDocument = await this.Model.findOne(query);

            return foundDocument;
        } catch(e) {
            throw new Error(e);
        }
    }

    //Getting document by id
    async findById(id) {
        try {
            const foundDocument = await this.Model.findById(id);

            return foundDocument;
        } catch(e) {
            throw new Error(e);
        }
    }

    //edit a document then return the new one
    editDocument(document, key, value) {
        const editedDocument = {
            ...document,
            [key]: value
        }

        return editedDocument;
    }
}

module.exports = Model;