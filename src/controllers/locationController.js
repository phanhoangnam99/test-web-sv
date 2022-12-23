const sequelize = require('../models/index');
const init_model = require('../models/init-models')
const model = init_model(sequelize)
const { successCode, errorCode, failCode, notFoundCode } = require('../ultis/response')
const { Op } = require("sequelize");


const getLocation = async (req, res) => {
    try {
        let { id } = req.params
        if (!id) {
            let result = await model.ViTri.findAll()
            successCode(res, result)
        }
        else {
            let result = await model.ViTri.findOne({
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

const postLocation = async (req, res) => {
    try {
        let { id, tenViTri, tinhThanh, quocGia, hinhAnh } = req.body
        let locationNew = { tenViTri, tinhThanh, quocGia, hinhAnh }
        let result = await model.ViTri.create(locationNew)
        successCode(res, result, "Thêm mới thành công")
    }
    catch (error) {
        console.log(error)
        errorCode(res, "lỗi backend")

    }
}

const putLocation = async (req, res) => {
    try {
        let { id } = req.params
        let { tenViTri, tinhThanh, quocGia, hinhAnh } = req.body
        let checkLocation = await model.ViTri.findOne({
            where: { id }
        }
        )
        if (checkLocation) {
            let locationUpdate = {

                tenViTri,
                tinhThanh,
                quocGia,
                hinhAnh
            }
            await model.ViTri.update(locationUpdate, { where: { id } })
            successCode(res, { ...req.body, id: req.body.id }, "Cập nhật thành công")
        }
        else {
            notFoundCode(res, { ...req.body, id: req.body.id }, "Không tìm thấy tài nguyên")
        }



    } catch (error) {
        errorCode(res, "lỗi backend")
    }
}

const deleteLocation = async (req, res) => {
    try {
        let { id } = req.params
        let checkLocation = await model.ViTri.findOne({
            where: { id }
        })
        if (checkLocation) {
            let result = await model.ViTri.destroy({
                where: { id }
            })
            successCode(res, null, "Xóa thành công")
        }
        else {
            notFoundCode(res, null, "Không tìm thấy tài nguyên")
        }

    } catch (error) {
        errorCode(res, "lỗi backend")
    }
}

const uploadLocationPic = async (req, res) => {
    try {
        let { maViTri } = req.body

        let checkLocation = await model.ViTri.findOne({ where: { id: maViTri } })

        if (checkLocation) {
            const fs = require('fs');


            fs.readFile(process.cwd() + "/" + req.file.path, async (err, data) => {
                let fileName = `data:${req.file.mimetype};base64,${Buffer.from(data).toString("base64")}`;
                fs.unlinkSync(process.cwd() + "/" + req.file.path);
                let result = await model.ViTri.update({ hinhAnh: fileName }, { where: { id: maViTri } })
                successCode(res, fileName, "Thêm mới thành công")

            })
        }
        else {
            notFoundCode(res, "Mã phòng không tồn tại", "Không tìm thấy tài nguyên")
        }



    } catch (error) {
        errorCode(res, "lỗi backend")
    }
}

const paginationLocation = async (req, res) => {
    try {
        let { pageSize, pageIndex, keyword } = req.query

        if (keyword) {
            const result = await model.ViTri.findAndCountAll({

                where: {
                    tenViTri: {
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
            const result = await model.ViTri.findAndCountAll({
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





module.exports = { getLocation, postLocation, putLocation, deleteLocation, uploadLocationPic, paginationLocation }  