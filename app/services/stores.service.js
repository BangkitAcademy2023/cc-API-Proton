const prisma = require("../utils/prisma");

async function getStores(){
    const store = await prisma.store.findMany()
    return store;
}

async function createStoreService(req){
    const {namaToko, alamat, telepon} = req.body
    const store = await prisma.store.create({
        data:{namaToko, alamat, telepon}
    })
    return store;
}

async function updateStoreService(req){
    const {namaToko, alamat, telepon} = req.body
    const {id} = req.params
    const store = await prisma.store.update({
        where:{id:parseInt(id)},
        data:{namaToko, alamat, telepon}
    })
    return store;
}

async function deleteStoreService(req){
    const {id} = req.params
    const store = await prisma.store.delete({
        where:{id:parseInt(id)},
    })
    return store;
}

module.exports={getStores, createStoreService, updateStoreService, deleteStoreService}