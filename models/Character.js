import mongoose from 'mongoose'
const {Schema} = mongoose

const Character = new Schema({
    name: String,
    image: String,
    ancestry: String,
    house: String,
    dateOfBirth: String,
    modified: { type: Date, default: Date.now}
})

export default mongoose.model('Character',Character)