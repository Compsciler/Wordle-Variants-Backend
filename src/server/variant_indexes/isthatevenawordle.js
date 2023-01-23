require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.IS_THAT_EVEN_A_WORDLE_MONGODB_URI

const conn = mongoose.createConnection(url)
const scoreSchema = new mongoose.Schema({
    solutionIndex: Number,
    solution: String,
    guesses: [String],
    lost: Boolean,
    isHardMode: Boolean,
    emojiGrid: String
})

const Score = conn.model('Score', scoreSchema)
module.exports = { Score }
