const express = require('express')
const commentRoute = express.Router()
const { getComment, postComment, putComment, deleteComment, getCommentWRoomId } = require('../controllers/commentController')

commentRoute.get('/', getComment)

commentRoute.post('/', postComment)
commentRoute.put('/:id', putComment)
commentRoute.delete('/:id', deleteComment)
commentRoute.get('/lay-binh-luan-theo-phong/:MaPhong', getCommentWRoomId)





module.exports = commentRoute
