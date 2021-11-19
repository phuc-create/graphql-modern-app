import { Schema, model } from 'mongoose'

const GerneModel = new Schema({
    gerne: { type: String, required: true },
})

const Gernes = model('gernes', GerneModel)

export default Gernes
