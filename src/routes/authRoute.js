const express = require('express');
const authRoute = express.Router();
const { signup,signin  } = require('../controllers/authController');

// localhost:8080/user/getUser


authRoute.post('/signup',signup)
authRoute.post('/signin',signin)
//GET
// userRoute.get("/", getUser);
// //POST
// userRoute.post("/postUser", postUser);
// //PUT
// userRoute.put("/putUser/:id", updateUser);
// // DELETE
// userRoute.delete("/deleteUser/:id", removeUser);

module.exports = authRoute;