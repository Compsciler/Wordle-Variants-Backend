require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.WORDLE_TEMPLATE_MONGODB_URI

const conn = mongoose.createConnection(url)
const scoreSchema = new mongoose.Schema({
    solutionIndex: Number,
    solution: String,
    guesses: [String],
    lost: Boolean,
    isHardMode: Boolean,
    emojiGrid: String
})

const Score = conn.model('Score', scoreSchema)  // name needs to stay as 'Score' to update the same MongoDB collection
module.exports = { Score }
