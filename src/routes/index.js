const express = require('express');
const rootRoute = express.Router();

const userRoute = require('./userRoute');
const authRoute = require('./authRoute');
const commentRoute = require('./commentRoute');
const locationRoute = require('./locationRoute');

rootRoute.use("/users", userRoute);
rootRoute.use("/auth", authRoute);
rootRoute.use('/binh-luan',commentRoute)
rootRoute.use('/vi-tri',locationRoute)

module.exports = rootRoute;