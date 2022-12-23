const express = require('express')
const roomRoute = express.Router()
const { getRoom, postRoom, putRoom, deleteRoom, getRoomWLocation, uploadRoomPic, roomPagination } = require('../controllers/roomController')
const upload = require('../middlewares/upload')
const {kiemTraToken} = require('../middlewares/auth')


roomRoute.get('/', getRoom)
roomRoute.get('/lay-phong-theo-vi-tri', getRoomWLocation)
roomRoute.post('/',kiemTraToken, postRoom)
roomRoute.put('/:id',kiemTraToken, putRoom)
roomRoute.delete('/:id',kiemTraToken, deleteRoom)
roomRoute.post('/upload-hinh-phong', kiemTraToken,upload.single('upload'), uploadRoomPic)
roomRoute.get('/phan-trang-tim-kiem', roomPagination)





module.exports = roomRoute