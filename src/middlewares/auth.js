const jwt = require('jsonwebtoken');


const encodeToken = (data) => {
    let token = jwt.sign(data, "BIMAT", { expiresIn: "7d" })
    return token
}

const decode = (token) => {
    return jwt.decode(token)
}

const checkToken = (token) => {
    const verifyToken = jwt.verify(token, "BIMAT")
    const checkRole = decode(token).role
     
    if (verifyToken && checkRole === "ADMIN") {
        return true

    }


    else {
       throw Error
    }




}

const kiemTraToken = async (req, res, next) => {
    try {
        let { token } = req.headers
        if (checkToken(token)) {
            next()
        }

    } catch (error) {
        res.status(403).send('token user hết hạn hoặc không đúng')
        return
    }


}

module.exports = { encodeToken, checkToken, kiemTraToken }