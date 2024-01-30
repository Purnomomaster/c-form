const express = require('express')
const { creates, fetchs } = require('./control')
const route = express.Router()

route.post('/create', creates)
route.get('/fetch', fetchs)

module.exports = route