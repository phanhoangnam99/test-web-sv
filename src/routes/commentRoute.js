const express = require('express')
const commentRoute = express.Router()
const { getComment,postComment } = require('../controllers/commentController')

commentRoute.get('/', getComment)

commentRoute.post('/', postComment)



module.exports = commentRoute
