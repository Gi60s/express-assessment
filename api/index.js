const express = require('express')
const cars = require('./cars')
const cities = require('./cities')
const names = require('./names')

const router = new express.Router()
module.exports = router

router.use('/cars', cars)
router.use('/cities', cars)
router.use('/names', names)
