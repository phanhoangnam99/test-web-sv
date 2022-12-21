const sequelize = require('../models/index');
const init_model = require('../models/init-models')
const model = init_model(sequelize)
const { successCode, errorCode, failCode, notFoundCode } = require('../ultis/response')



const getBooking = async (req, res) => {
    try {
        let { id } = req.params
        if (!id) {
            let result = await model.DatPhong.findAll()
            successCode(res, result)
        }
        else {
            let result = await model.DatPhong.findOne({
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
const postBooking = async (req, res) => {
    try {
        let {
            id,
            maPhong,
            ngayDen,
            ngayDi,
            soLuongKhach,
            maNguoiDung
        } = req.body
        const checkUser = await model.NguoiDung.findOne({ where: { id: maNguoiDung } })
        const checkRoom = await model.Phong.findOne({ where: { id: maPhong } })
        if (!checkUser) {
            notFoundCode(res, null, "Không tìm thấy người dùng")
        }
        else if (!checkRoom) {
            notFoundCode(res, null, "Không tìm thấy mã phòng")
        }

        else {

            let bookingNew = {
                maPhong,
                ngayDen,
                ngayDi,
                soLuongKhach,
                maNguoiDung
            }
            let result = await model.DatPhong.create(bookingNew)
            successCode(res, { id, ...bookingNew, }, "Thêm mới thành công")
        }

    } catch (error) {
        console.log(error)
        errorCode(res, "lỗi backend")

    }
}

const putBooking = async (req, res) => {
    try {
        let { id } = req.params
        let { maPhong, ngayDen, ngayDi, soLuongKhach, maNguoiDung, } = req.body
        let checkBooking = await model.DatPhong.findOne({
            where: { id }
        }
        )
        const checkUser = await model.NguoiDung.findOne({ where: { id: maNguoiDung } })
        const checkRoom = await model.Phong.findOne({ where: { id: maPhong } })
        if (!checkUser) {
            notFoundCode(res, null, "Không tìm thấy người dùng")
        }
        else if (!checkRoom) {
            notFoundCode(res, null, "Không tìm thấy mã phòng")
        }
        else {
            if (checkBooking) {
                let bookingUpdate = {

                    maPhong,
                    ngayDen,
                    ngayDi,
                    soLuongKhach,
                    maNguoiDung
                }
                await model.DatPhong.update(bookingUpdate, { where: { id } })
                successCode(res, { ...req.body, id: req.body.id }, "Cập nhật thành công")
            }
            else {
                notFoundCode(res, { ...req.body, id: req.body.id }, "Không tìm thấy tài nguyên")
            }

        }
    }
    catch (error) {
        console.log(error)
        errorCode(res, "lỗi backend")

    }
}
const deleteBooking = async (req, res) => {
    try {
        let { id } = req.params
        let checkBooking = await model.DatPhong.findOne({
            where: { id }
        })
        if (checkBooking) {
            let result = await model.DatPhong.destroy({
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


const getBookingWUserId = async (req,res) => {
    try {
        let { MaNguoiDung } = req.params
        let result = await model.DatPhong.findAll({ where: { maNguoiDung: MaNguoiDung } })
        successCode(res, result)
    } catch (error) {
console.log(error   )
        errorCode(res, "lỗi backend")
    }


}





module.exports = {
    getBooking,
    postBooking,
    putBooking,
    deleteBooking,
    getBookingWUserId
}