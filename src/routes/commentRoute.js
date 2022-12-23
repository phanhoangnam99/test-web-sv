const express = require('express')
const commentRoute = express.Router()
const { getComment, postComment, putComment, deleteComment, getCommentWRoomId } = require('../controllers/commentController')
const { kiemTraToken, checkToken } = require('../middlewares/auth')

commentRoute.get('/', getComment)
commentRoute.post('/',kiemTraToken, postComment)
commentRoute.put('/:id',kiemTraToken, putComment)
commentRoute.delete('/:id',kiemTraToken, deleteComment)
commentRoute.get('/lay-binh-luan-theo-phong/:MaPhong', getCommentWRoomId)





module.exports = commentRoute
