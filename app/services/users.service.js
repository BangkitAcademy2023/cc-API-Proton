const prisma = require("../utils/prisma");

async function getUser(){
    const user = await prisma.user.findMany()
    return user;
}

module.exports={getUser}