require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.NOTWORDLE_MONGODB_URI

const conn = mongoose.createConnection(url)
const scoreSchema = new mongoose.Schema({
    solutionIndex: Number,
    solution: String,
    guesses: [String],
    lost: Boolean,
    isHardMode: Boolean,
    emojiGrid: String,
    guessStatuses: [{
      scrabbleScore: Number,
      scrabbleStatus: String,
      alphaStatus: String,
      freqStatus: String,
      ladderDistance: Number,
      partialWordleStatus: { status: String, value: Number }
    }]
})

const Score = conn.model('Score', scoreSchema)
module.exports = { Score }
