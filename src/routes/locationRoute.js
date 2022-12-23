const express = require('express')
const locationRoute = express.Router()
const { getLocation, postLocation, putLocation, deleteLocation, uploadLocationPic, paginationLocation } = require('../controllers/locationController')
const { kiemTraToken, checkToken } = require('../middlewares/auth')
const upload = require('../middlewares/upload')

locationRoute.get('/phan-trang-tim-kiem', paginationLocation)
locationRoute.get('/:id?', getLocation)
locationRoute.post('/', kiemTraToken, postLocation)
locationRoute.put('/:id', kiemTraToken, putLocation)
locationRoute.delete('/:id', kiemTraToken, deleteLocation)
locationRoute.post('/upload-hinh-vitri', [kiemTraToken, upload.single('upload')], uploadLocationPic)




module.exports = locationRoute