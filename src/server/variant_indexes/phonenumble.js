require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.PHONE_NUMBLE_MONGODB_URI

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
