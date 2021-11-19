const { Schema, model } = require('mongoose')

const AuthorModel = new Schema({
    nameAuthor: { type: String, required: true },
    age: { type: Number },
})
const Authors = model('authors', AuthorModel)
module.exports = Authors
