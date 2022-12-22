const sequelize = require('../models/index')
const init_model = require('../models/init-models')
const model = init_model(sequelize)
const { successCode, errorCode, failCode, notFoundCode } = require('../ultis/response')



const getComment = async (req, res) => {
    let result = await model.BinhLuan.findAll()
    res.send(result)
}

const postComment = async (req, res) => {
    try {
        let {
            id,
            maPhong,
            maNguoiBinhLuan,
            noiDung,
            saoBinhLuan
        } = req.body
        const checkUser = await model.NguoiDung.findOne({ where: { id: maNguoiBinhLuan } })
        const checkRoom = await model.Phong.findOne({ where: { id: maPhong } })
        if (!checkUser) {
            notFoundCode(res, null, "Không tìm thấy người dùng")
        }
        else if (!checkRoom) {
            notFoundCode(res, null, "Không tìm thấy mã phòng")
        }
        else {
            let ngayBinhLuan = Date.now()
            let cmtNew = {
                maPhong,
                maNguoiBinhLuan,
                ngayBinhLuan,
                noiDung,
                saoBinhLuan
            }


            let result = await model.BinhLuan.create(cmtNew)
            successCode(res, result, "TThêm mới thành công")
        }
    } catch (error) {
        errorCode(res, "lỗi backend")

    }

}
const putComment = async (req, res) => {
    try {
        let { id } = req.params
        let { maPhong, maNguoiBinhLuan, noiDung, saoBinhLuan } = req.body
        let checkComment = await model.BinhLuan.findOne({
            where: { id }
        }
        )
        const checkUser = await model.NguoiDung.findOne({ where: { id: maNguoiBinhLuan } })
        const checkRoom = await model.Phong.findOne({ where: { id: maPhong } })
        if (!checkUser) {
            notFoundCode(res, null, "Không tìm thấy người dùng")
        }
        else if (!checkRoom) {
            notFoundCode(res, null, "Không tìm thấy mã phòng")
        }
        else {
            if (checkComment) {
                let today = Date.now()
                const ngayBinhLuan = new Date(today);
                ngayBinhLuan.toISOString()
                let commentUpdate = {

                    maPhong,
                    maNguoiBinhLuan,
                    ngayBinhLuan,
                    noiDung,
                    saoBinhLuan
                }

                await model.BinhLuan.update(commentUpdate, { where: { id } })
                successCode(res, { ...commentUpdate, id: req.body.id }, "Cập nhật thành công")
            }
            else {
                notFoundCode(res, { ...commentUpdate, id: req.body.id }, "Không tìm thấy tài nguyên")
            }

        }
    }
    catch (error) {
        console.log(error)
        errorCode(res, "lỗi backend")

    }
}

const deleteComment = async (req, res) => {
    try {
        let { id } = req.params
        let checkComment = await model.BinhLuan.findOne({
            where: { id }
        })
        if (checkComment) {
            let result = await model.BinhLuan.destroy({
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

const getCommentWRoomId = async (req, res) => {
    try {
        let { MaPhong } = req.params
        let result = await model.BinhLuan.findAll({ where: { maPhong: MaPhong } })
        successCode(res, result)
    } catch (error) {
        console.log(error)
        errorCode(res, "lỗi backend")
    }


}


module.exports = { getComment, postComment, putComment, deleteComment, getCommentWRoomId }