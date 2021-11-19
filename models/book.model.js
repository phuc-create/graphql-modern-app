import { Schema, model } from 'mongoose'

const BookModel = new Schema({
    name: { type: String, required: true },
    authorId: { type: Schema.Types.ObjectId },
    gerneId: { type: Schema.Types.ObjectId },
}, {
    timestamps: true,
})
const Books = model('books', BookModel)
export default Books
