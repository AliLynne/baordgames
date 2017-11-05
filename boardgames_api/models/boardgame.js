const mongoose = require('mongoose')
const boardgameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Title cannot be blank!'
    },
    added_date: {
        type: Date,
        default: Date.now
    }
})

const Boardgame = mongoose.model('Boardgame', boardgameSchema)
module.exports = Boardgame

