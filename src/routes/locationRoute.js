const express = require('express')
const locationRoute = express.Router()
const { getLocation, postLocation, putLocation, deleteLocation } = require('../controllers/locationController')


locationRoute.get('/:id?', getLocation)
locationRoute.post('/', postLocation)
locationRoute.put('/:id', putLocation)
locationRoute.delete('/:id', deleteLocation)




module.exports = locationRoute