const express = require('express')
const cors = require('cors')
const lgtv2 = require('lgtv2')({ url: 'ws://192.168.1.59:3000' })

lgtv2.on('error', (err) => console.log(err))
lgtv2.on('connecting', () => console.log('Connecting to TV...'))
lgtv2.on('connect', () => console.log('Connected to TV'))

const routes = require('./routes')

const app = express()

app.use(cors())
app.use(routes)
app.listen(3333)