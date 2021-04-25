const mongoose = require('mongoose');

class Model {
    constructor(schema, modelName) {
        this.Model = mongoose.model(modelName, schema);
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