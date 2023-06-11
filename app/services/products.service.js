const prisma = require("../utils/prisma");

async function getProducts(){
    const product = await prisma.product.findMany()
    return product;
}

async function createProductService(req){
    const {kodeProduk, jumlahProduk, namaProduk, kategori, tipe, harga, hargaJual, expiredDate, jumlahTerjual} = req.body
    const product = await prisma.product.create({
        data:{kodeProduk, jumlahProduk, namaProduk, kategori, tipe, harga, hargaJual, expiredDate, jumlahTerjual}
    })
    return product;
}

async function updateProductService(req){
    const {kodeProduk, jumlahProduk, namaProduk, kategori, tipe, harga, hargaJual, expiredDate, jumlahTerjual} = req.body
    const {id} = req.params
    const product = await prisma.product.update({
        where:{id:parseInt(id)},
        data:{kodeProduk, jumlahProduk, namaProduk, kategori, tipe, harga, hargaJual, expiredDate, jumlahTerjual}
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