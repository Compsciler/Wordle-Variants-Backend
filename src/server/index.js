require('dotenv').config()
// const mongoose = require('mongoose')
const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())
const path = require('path')

const { Score: WordleTemplateScore } = require('./variant_indexes/wordletemplate.js')
const { Score: BigramleScore } = require('./variant_indexes/bigramle.js')


app.post('/wordletemplate/api/scores', (req, res) => {
  const score = new WordleTemplateScore(req.body)

  score.save().then(savedScore => {
      res.json(savedScore)
  })
})

app.post('/bigramle/api/scores', (req, res) => {
    const score = new BigramleScore(req.body)

    score.save().then(savedScore => {
        res.json(savedScore)
    })
})


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '../../build')))

  /*
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'))
  })
  */

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
  })
}
