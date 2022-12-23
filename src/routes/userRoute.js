const express = require('express');
const userRoute = express.Router();
const { getUser, postUser, putUser, deleteUser, searchUser, uploadAvatar, userPagination } = require('../controllers/userController');
const upload = require('../middlewares/upload')
const { kiemTraToken } = require('../middlewares/auth')

userRoute.get('/phan-trang-tim-kiem', userPagination)
userRoute.get("/:id?", getUser);
userRoute.post("/", postUser);
userRoute.put("/:id", putUser);
userRoute.delete("/:id", deleteUser);
userRoute.get("/search/:tenNguoiDung", searchUser)
userRoute.post('/upload-avatar', [kiemTraToken, upload.single("upload")], uploadAvatar)

module.exports = userRoute;