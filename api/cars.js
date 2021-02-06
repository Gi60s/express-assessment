const express = require('express')

const router = new express.Router()
module.exports = router

router.get('/', (req, res) => {
  res.send([
    'Acura',
    'Buick',
    'Chevrolet',
    'Ford',
    'Honda',
    'Kia',
    'Toyota',
    'Volvo'
  ])
})