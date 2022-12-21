const express = require('express')
const roomRoute = express.Router()
const { getRoom, postRoom, putRoom, deleteRoom,getRoomWLocation } = require('../controllers/roomController')


roomRoute.get('/', getRoom)
roomRoute.get('/lay-phong-theo-vi-tri',getRoomWLocation)
roomRoute.post('/', postRoom)
roomRoute.put('/:id', putRoom)
roomRoute.delete('/:id',deleteRoom)





module.exports = roomRoute