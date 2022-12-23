const sequelize = require('../models/index');
const init_model = require('../models/init-models')
const model = init_model(sequelize)
const { successCode, errorCode, failCode, notFoundCode } = require('../ultis/response')


const getRoom = async (req, res) => {
    try {

        let result = await model.Phong.findAll()


        successCode(res, result)

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
        let checkRoom = await model.Phong.findOne({
            where: { id }
        })
        let checkLocation = await model.ViTri.findOne({
            where: { id: maViTri }
        }
        )
        if (checkRoom && checkLocation) {
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



module.exports = { getRoom, getRoomWLocation, postRoom, putRoom, deleteRoom, uploadRoomPic }