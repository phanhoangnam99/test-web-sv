const sequelize = require('../models/index');
const init_model = require('../models/init-models')
const model = init_model(sequelize)
const { successCode, errorCode, failCode, notFoundCode } = require('../ultis/response')
const { Op } = require('sequelize')


const getRoom = async (req, res) => {
    try {
        let { id } = req.params
        if (!id) {
            let result = await model.Phong.findAll()
            successCode(res, result)
        }
        else {
            let result = await model.Phong.findOne({ where: { id } })
            if (!result) {
                notFoundCode(res, null, "Không tìm thấy tài nguyên")
                return
            }
            successCode(res, result)
        }


    } catch (error) {
        console.log(error)
        errorCode(res, "lỗi backend")
    }

}
const getRoomWLocation = async (req, res) => {
    try {
        let { maViTri } = req.query

        let result = await model.Phong.findAll({
            where: { maViTri }
        })
        if (!result) {
            notFoundCode(res, null, "Không tìm thấy tài nguyên")
            return
        }
        successCode(res, result)

    } catch (error) {
        errorCode(res, "lỗi backend")
    }
}
const postRoom = async (req, res) => {
    try {
        let {
            id,
            tenPhong,
            khach,
            phongNgu,
            giuong,
            phongTam,
            moTa,
            giaTien,
            mayGiat,
            banLa,
            tivi,
            dieuHoa,
            wifi,
            bep,
            doXe,
            hoBoi,
            banUi,
            maViTri,
            hinhAnh
        } = req.body

        const checkLocation = await model.ViTri.findOne({ where: { id: maViTri } })
        console.log(checkLocation)
        if (checkLocation) {
            let roomNew = {

                tenPhong,
                khach,
                phongNgu,
                giuong,
                phongTam,
                moTa,
                giaTien,
                mayGiat,
                banLa,
                tivi,
                dieuHoa,
                wifi,
                bep,
                doXe,
                hoBoi,
                banUi,
                maViTri,
                hinhAnh
            }
            let result = await model.Phong.create(roomNew)
            successCode(res, result, "Thêm mới thành công")
        }
        else {
            notFoundCode(res, { ...req.body }, "Không tìm thấy mã vị trí")
        }
    }
    catch (error) {
        errorCode(res, "lỗi backend")

    }
}
const putRoom = async (req, res) => {
    try {
        console.log("ec")
        let { id } = req.params
        let {

            tenPhong,
            khach,
            phongNgu,
            giuong,
            phongTam,
            moTa,
            giaTien,
            mayGiat,
            banLa,
            tivi,
            dieuHoa,
            wifi,
            bep,
            doXe,
            hoBoi,
            banUi,
            maViTri,
            hinhAnh
        } = req.body

        let checkLocation = await model.ViTri.findOne({
            where: { id: maViTri }
        }
        )
        if (checkLocation) {
            let roomUpdate = {

                tenPhong,
                khach,
                phongNgu,
                giuong,
                phongTam,
                moTa,
                giaTien,
                mayGiat,
                banLa,
                tivi,
                dieuHoa,
                wifi,
                bep,
                doXe,
                hoBoi,
                banUi,
                maViTri,
                hinhAnh
            }
            await model.Phong.update(roomUpdate, { where: { id } })
            successCode(res, { ...req.body, id: req.body.id }, "Cập nhật thành công")
        }
        else {
            notFoundCode(res, { ...req.body, id: req.body.id }, "Không tìm thấy tài nguyên")
        }



    } catch (error) {
        errorCode(res, "lỗi backend")
        console.log(error)
    }
}
const deleteRoom = async (req, res) => {
    try {
        let { id } = req.params
        let checkRoom = await model.Phong.findOne({
            where: { id }
        })
        if (checkRoom) {
            let result = await model.Phong.destroy({
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


const uploadRoomPic = async (req, res) => {

    try {
        let { maPhong } = req.body

        let checkRoom = await model.Phong.findOne({ where: { id: maPhong } })

        if (checkRoom) {
            const fs = require('fs');


            fs.readFile(process.cwd() + "/" + req.file.path, async (err, data) => {
                let fileName = `data:${req.file.mimetype};base64,${Buffer.from(data).toString("base64")}`;
                fs.unlinkSync(process.cwd() + "/" + req.file.path);
                let result = await model.Phong.update({ hinhAnh: fileName }, { where: { id: maPhong } })
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
const roomPagination = async (req, res) => {
    try {
        let { pageSize, pageIndex, keyword } = req.query

        if (keyword) {
            const result = await model.Phong.findAndCountAll({

                where: {
                    tenPhong: {
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
            const result = await model.Phong.findAndCountAll({
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





module.exports = { getRoom, getRoomWLocation, postRoom, putRoom, deleteRoom, uploadRoomPic, roomPagination }