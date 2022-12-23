const express = require('express')
const roomRoute = express.Router()
const { getRoom, postRoom, putRoom, deleteRoom, getRoomWLocation, uploadRoomPic, roomPagination } = require('../controllers/roomController')
const upload = require('../middlewares/upload')
const {kiemTraToken} = require('../middlewares/auth')


roomRoute.get('/lay-phong-theo-vi-tri', getRoomWLocation)
roomRoute.get('/phan-trang-tim-kiem', roomPagination)
roomRoute.get('/:id?', getRoom)
roomRoute.post('/',kiemTraToken, postRoom)
roomRoute.put('/:id',kiemTraToken, putRoom)
roomRoute.delete('/:id',kiemTraToken, deleteRoom)
roomRoute.post('/upload-hinh-phong', kiemTraToken,upload.single('upload'), uploadRoomPic)





module.exports = roomRoute