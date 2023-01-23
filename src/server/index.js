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
const { Score: BigramlePlusScore } = require('./variant_indexes/bigramleplus.js')
const { Score: CaesardleScore } = require('./variant_indexes/caesardle.js')
const { Score: CodleScore } = require('./variant_indexes/codle.js')
const { Score: IsThatEvenAWordleScore } = require('./variant_indexes/isthatevenawordle.js')
const { Score: MetalloidleScore } = require('./variant_indexes/metalloidle.js')
const { Score: NotwordleScore } = require('./variant_indexes/notwordle.js')
const { Score: NumerleScore } = require('./variant_indexes/numerle.js')
const { Score: PhoneNumbleScore } = require('./variant_indexes/phonenumble.js')
const { Score: RepeatleScore } = require('./variant_indexes/repeatle.js')
const { Score: SubredditleScore } = require('./variant_indexes/subredditle.js')
const { Score: UsernamleScore } = require('./variant_indexes/usernamle.js')
const { Score: VerticleScore } = require('./variant_indexes/verticle.js')
const { Score: WorwordleScore } = require('./variant_indexes/worwordle.js')
const { Score: WorwordlePlusScore } = require('./variant_indexes/worwordleplus.js')


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

app.post('/bigramleplus/api/scores', (req, res) => {
  const score = new BigramlePlusScore(req.body)

  score.save().then(savedScore => {
    res.json(savedScore)
  })
})

app.post('/caesardle/api/scores', (req, res) => {
  const score = new CaesardleScore(req.body)

  score.save().then(savedScore => {
    res.json(savedScore)
  })
})

app.post('/codle/api/scores', (req, res) => {
  const score = new CodleScore(req.body)

  score.save().then(savedScore => {
    res.json(savedScore)
  })
})

app.post('/isthatevenawordle/api/scores', (req, res) => {
  const score = new IsThatEvenAWordleScore(req.body)

  score.save().then(savedScore => {
    res.json(savedScore)
  })
})

app.post('/metalloidle/api/scores', (req, res) => {
  const score = new MetalloidleScore(req.body)

  score.save().then(savedScore => {
    res.json(savedScore)
  })
})

app.post('/notwordle/api/scores', (req, res) => {
  const score = new NotwordleScore(req.body)

  score.save().then(savedScore => {
    res.json(savedScore)
  })
})

app.post('/numerle/api/scores', (req, res) => {
  const score = new NumerleScore(req.body)

  score.save().then(savedScore => {
    res.json(savedScore)
  })
})

app.post('/phonenumble/api/scores', (req, res) => {
  const score = new PhoneNumbleScore(req.body)

  score.save().then(savedScore => {
    res.json(savedScore)
  })
})

app.post('/repeatile/api/scores', (req, res) => {
  const score = new RepeatleScore(req.body)

  score.save().then(savedScore => {
    res.json(savedScore)
  })
})

app.post('/subredditle/api/scores', (req, res) => {
  const score = new SubredditleScore(req.body)

  score.save().then(savedScore => {
    res.json(savedScore)
  })
})

app.post('/usernamle/api/scores', (req, res) => {
  const score = new UsernamleScore(req.body)

  score.save().then(savedScore => {
    res.json(savedScore)
  })
})

app.post('/verticle/api/scores', (req, res) => {
  const score = new VerticleScore(req.body)

  score.save().then(savedScore => {
    res.json(savedScore)
  })
})

app.post('/worwordle/api/scores', (req, res) => {
  const score = new WorwordleScore(req.body)

  score.save().then(savedScore => {
    res.json(savedScore)
  })
})

app.post('/worwordleplus/api/scores', (req, res) => {
  const score = new WorwordlePlusScore(req.body)

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
