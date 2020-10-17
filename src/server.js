//Importing dependences
const express = require('express')
const path = require('path')
const pages = require('./pages.js')

//Starting express
const server = express()

server
//Use body of request
.use(express.urlencoded({ extended: true }))
//Using statics archives
.use(express.static('public'))

//Configure Template Engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')
//Making routes
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)


//Starting server
server.listen(5500)