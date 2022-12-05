const jwt = require('jsonwebtoken');


const encodeToken  = (data)=>{
    let token = jwt.sign(data,"BIMAT",{expiresIn:"7d"})
    return token
}

module.exports = {encodeToken}