const prisma = require("../utils/prisma");

async function getProducts(){
    const product = await prisma.product.findMany()
    return product;
}

async function createProductService(req){
    const {namaBarang, categories, jumlahBarang, expiredDate} = req.body
    const product = await prisma.product.create({
        data:{categories, expiredDate, jumlahBarang, namaBarang}
    })
    return product;
}

async function updateProductService(req){
    const {namaBarang, categories, jumlahBarang, expiredDate} = req.body
    const {id} = req.params
    const product = await prisma.product.update({
        where:{id:parseInt(id)},
        data:{categories, expiredDate, jumlahBarang, namaBarang}
    })
    return product;
}

async function deleteProductService(req){
    const {id} = req.params
    const product = await prisma.product.delete({
        where:{id:parseInt(id)},
    })
    return product;
}

module.exports={getProducts, createProductService, updateProductService, deleteProductService}