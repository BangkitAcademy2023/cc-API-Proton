const prisma = require("../utils/prisma");

async function getProducts(namaProduk) {
  let query = {};

  if (namaProduk) {
    query = {
      where: {
        namaProduk: {
          contains: namaProduk,
        },
      },
    };
  }

  const products = await prisma.product.findMany(query);
  return products;
}

async function getProductByNama(namaProduk) {
  const product = await prisma.product.findUnique({
    where: {
      namaProduk: {
        equals: namaProduk
      }
    },
    select: {
      kodeProduk: true,
      jumlahProduk: true,
      namaProduk: true,
      kategori: true,
      tipe: true,
      harga: true,
      hargaJual: true,
      expiredDate: true,
      jumlahTerjual: true,
    },
  });

  if (!product) {
    throw new Error('Product not found');
  }

  return product;
}

async function getDetails(req) {
  const { productId } = req.params;

  try {
    const parsedProductId = parseInt(productId);
    
    if (isNaN(parsedProductId)) {
      throw new Error('Invalid productId');
    }
    
    const product = await prisma.product.findUnique({
      where: {
        id: parsedProductId,
      },
      select: {
        kodeProduk: true,
        jumlahProduk: true,
        namaProduk: true,
        kategori: true,
        tipe: true,
        harga: true,
        hargaJual: true,
        expiredDate: true,
        jumlahTerjual: true,
      },
    });

    if (!product) {
      throw new Error('Product not found');
    }

    return product;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to get product details.');
  }
}

module.exports = {
  getDetails,
};

async function createProductService(req) {
  const { kodeProduk, jumlahProduk, namaProduk, kategori, tipe, harga, hargaJual, expiredDate, jumlahTerjual } = req.body;
  const product = await prisma.product.create({
    data: { kodeProduk, jumlahProduk, namaProduk, kategori, tipe, harga, hargaJual, expiredDate, jumlahTerjual },
  });
  return product;
}

async function updateProductService(req) {
  const { kodeProduk, jumlahProduk, namaProduk, kategori, tipe, harga, hargaJual, expiredDate, jumlahTerjual } = req.body;
  const { id } = req.params;
  const product = await prisma.product.update({
    where: { id: parseInt(id) },
    data: { kodeProduk, jumlahProduk, namaProduk, kategori, tipe, harga, hargaJual, expiredDate, jumlahTerjual },
  });
  return product;
}

async function deleteProductService(req) {
  const { id } = req.params;
  const product = await prisma.product.delete({
    where: { id: parseInt(id) },
  });
  return product;
}

module.exports = { getProducts, getProductByNama, getDetails, createProductService, updateProductService, deleteProductService };
