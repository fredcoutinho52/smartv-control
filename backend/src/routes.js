const express = require('express')
const Commands = require('./Commands')

const routes = express.Router()

routes.get('/volume/:id', Commands.setVolume)
routes.get('/app/:id', Commands.launchApp)
routes.get('/media/:id', Commands.mediaControls)

module.exports = routes