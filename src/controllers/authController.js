const { Sequelize } = require('sequelize');
const sequelize = require('../models/index');
const init_model = require('../models/init-models');
const model = init_model(sequelize)
const { successCode, errorCode, failCode } = require('../ultis/response')
const { encodeToken } = require('../middlewares/auth')



const signup = async (req, res) => {
    let { id, name, email, password, phone, birthday, gender, role } = req.body;
    let data = { name, email, password, phone, birthday, gender, role: "USER" }
    try {

        let checkDup = await model.NguoiDung.findOne({ where: { email } })
        if (checkDup) {
            failCode(res, "Email đã tồn tại", "Yêu cầu không hợp lệ")
            return
        }


        if (gender === true || gender === false) {
            let result = await model.NguoiDung.create( data )

            successCode(res, result, "Đăng kí tài khoản thành ông")
        }
        else {
            failCode(res, "Trường gender chỉ nhận vào hai giá trị True hoặc False","Yêu cầu không hợp lệ")
            return

        }



    } catch (error) {
        errorCode(res,'lỗi backend')
        console.log(error)
    }

}

const signin = async (req, res) => {
    try {
        let { email, password } = req.body;
        const result = await model.NguoiDung.findOne({ where: { email, pass_word:password, },attributes:["id","email","role"]})
        if (result) {
            const token = encodeToken(result.dataValues)
            successCode(res, { user: result, token }, "Đăng nhập thành công")
        }
        else {
            failCode(res, "Email hoặc mật khẩu không đúng", "Yêu cầu không hợp lệ")

        }
    } catch (error) {
        errorCode(res, 'lỗi backend')

    }
}

module.exports = { signup, signin }