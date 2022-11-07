const PORT = process.env.PORT || 3001
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const routes = require('./routes')
const app = express()

//middleeware
app.use(express.json())
app.use(cors())
app.use(logger('dev'))
app.use(express.static(`${__dirname}/favorites-frontend/build`))

app.use('/', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit!!!' })
})

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/favorites-frontend/build/index.html`)
})
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
