const express = require('express');
const rootRoute = express.Router();

const userRoute = require('./userRoute');
const authRoute = require('./authRoute');
const commentRoute = require('./commentRoute');
const locationRoute = require('./locationRoute');
const roomRoute = require('./roomRoute');
const bookingRoute = require('./bookingRoute');

rootRoute.use("/users", userRoute);
rootRoute.use("/auth", authRoute);
rootRoute.use('/binh-luan',commentRoute)
rootRoute.use('/vi-tri',locationRoute)
rootRoute.use('/phong-thue',roomRoute)
rootRoute.use('/phong-thue',roomRoute)
rootRoute.use('/dat-phong',bookingRoute)

module.exports = rootRoute;