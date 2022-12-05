const { Sequelize } = require('sequelize');
const sequelize = require('../models/index')
const init_model = require('../models/init-models')
const model = init_model(sequelize)




const getComment = async (req, res) => {
    let comment = await model.BinhLuan.findAll()
    res.send(comment)
}

const postComment = async (req, res) => {
    let {
        id,
        maPhong,
        maNguoiBinhLuan,
        noiDung,
        saoBinhLuan
    } = req.body
    let ngayBinhLuan = Date.now()
    let cmtNew = {
        maPhong,
        maNguoiBinhLuan,
        ngayBinhLuan,
        noiDung,
        saoBinhLuan
    }


    let result = await model.BinhLuan.create(cmtNew)
    successCode(res, result, "bl thanh cong")
}

module.exports = { getComment, postComment }