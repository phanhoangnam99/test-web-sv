const sequelize = require('../models/index');
const init_model = require('../models/init-models')
const model = init_model(sequelize)
const { successCode, errorCode, failCode, notFoundCode } = require('../ultis/response')
const { Op } = require("sequelize");


const getUser = async (req, res) => {
    try {
        let { id } = req.params
        if (!id) {
            let result = await model.NguoiDung.findAll()
            successCode(res, result)
        }
        else {
            let result = await model.NguoiDung.findOne({
                where: { id }
            })
            if (!result) {
                notFoundCode(res, null, "Không tìm thấy tài nguyên")
                return
            }
            successCode(res, result)
        }
    } catch (error) {
        errorCode(res, "lỗi backend")
    }
}


const postUser = async (req, res) => {
    try {
        let { id, name, email, password, phone, birthday, gender, role } = req.body
        const checkDup = await model.NguoiDung.findOne({
            where: { email }
        })
        if (checkDup) {
            failCode(res, "Email đã tồn tại", "Yêu cầu không hợp lệ")
        }
        else {
            let userNew = { name, email, password, phone, birthday, gender, role }
            let result = await model.NguoiDung.create(userNew)
            successCode(res, result, "Thêm mới thành công")
        }
    }
    catch (error) {
        errorCode(res, "lỗi backend")

    }
}
const putUser = async (req, res) => {
    try {
        let { id } = req.params
        let { name, email, password, phone, birthday, gender, role } = req.body
        let checkUser = await model.NguoiDung.findOne({
            where: { id }
        }
        )
        if (checkUser) {
            let userUpdate = {

                name, email, password, phone, birthday, gender, role
            }
            await model.NguoiDung.update(userUpdate, { where: { id } })
            successCode(res, { ...req.body, id }, "Cập nhật thành công")
        }
        else {
            notFoundCode(res, "Người dùng không tồn tại", "Không tìm thấy tài nguyên")
        }
    } catch (error) {
        errorCode(res, "lỗi backend")

    }
}
const deleteUser = async (req, res) => {
    try {
        let { id } = req.params
        let checkUser = await model.NguoiDung.findOne({
            where: { id }
        })
        if (checkUser) {
            let result = await model.NguoiDung.destroy({
                where: { id }
            })
            successCode(res, null, "Xóa thành công")
        }
        else {
            notFoundCode(res, "Người dùng không tồn tại", "Không tìm thấy tài nguyên")


        }

    } catch (error) {
        errorCode(res, "lỗi backend")
    }
}

const searchUser = async (req, res) => {
    try {
        let { tenNguoiDung } = req.params
        let checkUser = await model.NguoiDung.findAll({
            where: {
                name: {
                    [Op.like]: `%${tenNguoiDung}%`
                }
            }
        })
        successCode(res, checkUser)

    } catch (error) {
        errorCode(res, "lỗi backend")

    }
}

const uploadAvatar = async (req, res) => {

    try {
        let { maNguoiDung } = req.body

        let checkUser = await model.NguoiDung.findOne({ where: { id: maNguoiDung } })

        if (checkUser) {
            const fs = require('fs');


            fs.readFile(process.cwd() + "/" + req.file.path, async (err, data) => {
                let fileName = `data:${req.file.mimetype};base64,${Buffer.from(data).toString("base64")}`;
                fs.unlinkSync(process.cwd() + "/" + req.file.path);
                let result = await model.NguoiDung.update({ hinhAnh: fileName }, { where: { id: maNguoiDung } })
                successCode(res, fileName, "Thêm mới thành công")

            })
        }
        else {
            notFoundCode(res, "Người dùng không tồn tại", "Không tìm thấy tài nguyên")
        }



    } catch (error) {
        console.log(error)
        errorCode(res, "lỗi backend")
    }

}


const userPagination = async (req, res) => {
    try {
        let { pageSize, pageIndex, keyword } = req.query

        if (keyword) {
            const result = await model.NguoiDung.findAndCountAll({

                where: {
                    name: {
                        [Op.like]: `%${keyword}%`
                    }
                }
                ,
                offset: +pageIndex * +pageSize - +pageSize,
                limit: +pageSize
            })
            let data = {
                pageIndex,
                pageSize,
                keyword,
                totalRow: result.count,
                data: result.rows
            }
            res.send(data)

        }
        else {
            const result = await model.NguoiDung.findAndCountAll({
                offset: +pageIndex * +pageSize - +pageSize,
                limit: +pageSize
            })
            let data = {
                pageIndex,
                pageSize,
                keyword,
                totalRow: result.count,
                data: result.rows
            }
            res.send(data)
        }
    } catch (error) {

        errorCode(res, 'loi backend')
    }
}

module.exports = { getUser, postUser, putUser, deleteUser, searchUser, uploadAvatar, userPagination } 