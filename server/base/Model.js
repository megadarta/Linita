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

    //Saving document
    save = async (document) => {
        try {
            const createdDocument = await document.save();

            return createdDocument;
        } catch(e) {
            throw new Error(e);
        }
    }

    //Getting document by query
    findOne = async (query) => {
        try {
            const foundDocument = await this.Model.findOne(query);

            return foundDocument;
        } catch(e) {
            throw new Error(e);
        }
    }

    //Getting document by id
    findById = async (id) => {
        try {
            const foundDocument = await this.Model.findById(id);

            return foundDocument;
        } catch(e) {
            throw new Error(e);
        }
    }

    //edit a document then return the new one
    editDocument = (document, key, value) => {
        const editedDocument = {
            ...document,
            [key]: value
        }

        return editedDocument;
    }

    populate = async (document, ref) => {
        try {
            const populatedDocument = await this.Model.populate(document, { path: ref });

            return populatedDocument;
        } catch(e) {
            throw new Error(e);
        }
    }
}

module.exports = Model;