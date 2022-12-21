const express = require('express')
const bookingRoute = express.Router()
const { getBooking, postBooking, putBooking, deleteBooking,getBookingWLocation,getBookingWUserId } = require('../controllers/bookingController')

bookingRoute.get('/:id?', getBooking)
bookingRoute.get('/lay-theo-nguoi-dung/:MaNguoiDung',getBookingWUserId)
bookingRoute.post('/', postBooking)
bookingRoute.put('/:id', putBooking)
bookingRoute.delete('/:id',deleteBooking)

module.exports = bookingRoute
