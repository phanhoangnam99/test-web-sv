let { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

const getUser = async (req, res) => {
    let danhSach = await prisma.NguoiDung.findMany(

    )
    res.send(danhSach)
}

module.exports =  {getUser} 