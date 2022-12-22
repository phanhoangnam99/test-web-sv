const express = require('express');
const userRoute = express.Router();
const { getUser ,postUser, putUser, deleteUser,searchUser,uploadAvatar } = require('../controllers/userController');
const upload = require('../middlewares/upload')

userRoute.get("/:id?", getUser);
userRoute.post("/", postUser);
userRoute.put("/:id", putUser);
userRoute.delete("/:id", deleteUser);
userRoute.get("/search/:tenNguoiDung",searchUser)
userRoute.post('/upload-avatar',upload.single("upload"),uploadAvatar)

module.exports = userRoute;