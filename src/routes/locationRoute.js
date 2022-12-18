const express = require('express')
const locationRoute = express.Router()
const { getLocation, postLocation, putLocation, deleteLocation } = require('../controllers/locationController')
const { kiemTraToken, checkToken } = require('../middlewares/auth')


locationRoute.get('/:id?', getLocation)
locationRoute.post('/', kiemTraToken, postLocation)
locationRoute.put('/:id', kiemTraToken, putLocation)
locationRoute.delete('/:id', kiemTraToken, deleteLocation)




module.exports = locationRoute