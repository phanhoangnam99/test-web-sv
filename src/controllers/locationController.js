const sequelize = require('../models/index');
const init_model = require('../models/init-models')
const model = init_model(sequelize)
const { successCode, errorCode, failCode, notFoundCode } = require('../ultis/response')

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



module.exports = { getLocation, postLocation, putLocation, deleteLocation }  