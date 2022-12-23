const express = require('express')
const roomRoute = express.Router()
const { getRoom, postRoom, putRoom, deleteRoom, getRoomWLocation, uploadRoomPic } = require('../controllers/roomController')
const upload = require('../middlewares/upload')


roomRoute.get('/', getRoom)
roomRoute.get('/lay-phong-theo-vi-tri', getRoomWLocation)
roomRoute.post('/', postRoom)
roomRoute.put('/:id', putRoom)
roomRoute.delete('/:id', deleteRoom)
roomRoute.post('/upload-hinh-phong', upload.single('upload'), uploadRoomPic)





module.exports = roomRoute