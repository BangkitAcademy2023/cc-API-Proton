const prisma = require("../utils/prisma");

async function getProducts(){
    const product = await prisma.product.findMany()
    return product;
}

async function createProductService(req){
    const {jumlahProduk, namaProduk, kategori, tipe, harga, hargaJual, expiredDate} = req.body
    const product = await prisma.product.create({
        data:{cjumlahProduk, namaProduk, kategori, tipe, harga, hargaJual, expiredDate}
    })
    return product;
}

async function updateProductService(req){
    const {jumlahProduk, namaProduk, kategori, tipe, harga, hargaJual, expiredDate} = req.body
    const {id} = req.params
    const product = await prisma.product.update({
        where:{id:parseInt(id)},
        data:{cjumlahProduk, namaProduk, kategori, tipe, harga, hargaJual, expiredDate}
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