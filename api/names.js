const express = require('express')

const router = new express.Router()
module.exports = router

const names = new Set(['Bob', 'Jan', 'Sandy'])

router.get('/', (req, res) => {
  res.send(Array.from(names))
})

router.put('/', (req, res) => {
  const name = req.body.name
  names.add(name)
  res.sendStatus(200)
})

router.delete('/:name', (req, res) => {
  const name = req.params.name
  names.delete(name)
  res.sendStatus(204)
})