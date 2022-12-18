const express = require('express');
const userRoute = express.Router();
const { getUser ,postUser, putUser, deleteUser,searchUser } = require('../controllers/userController');


//GET
userRoute.get("/:id?", getUser);
// //POST
userRoute.post("/", postUser);
// //PUT
userRoute.put("/:id", putUser);
// // DELETE
userRoute.delete("/:id", deleteUser);

//SEARCH
userRoute.get("/search/:tenNguoiDung",searchUser)

module.exports = userRoute;