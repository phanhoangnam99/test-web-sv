const express = require('express');
const userRoute = express.Router();
const { getUser  } = require('../controllers/userController');

// localhost:8080/user/getUser

//GET
userRoute.get("/", getUser);
// //POST
// userRoute.post("/postUser", postUser);
// //PUT
// userRoute.put("/putUser/:id", updateUser);
// // DELETE
// userRoute.delete("/deleteUser/:id", removeUser);

module.exports = userRoute;