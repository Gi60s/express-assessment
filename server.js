const express = require('express')
const path = require('path')
const api = require('./api')

const app = express()
const wwwDirPath = path.resolve(__dirname, 'www')

app.get('/health', (req, res) => {
  res.send('OK')
})

app.use(express.json())

app.use('/api', api)

app.use(express.static(wwwDirPath))

app.listen(5000, err => {
  if (err) return console.error(err)
  console.log('Server listening on port 5000')
})