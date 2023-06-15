const { StatusCodes } = require("http-status-codes");
const { UnauthenticatedError } = require("../../../errors");
const { querySemuaUser } = require("../../../services/products.service");
const { getProducts, createProductService, updateProductService, deleteProductService } = require("../../../services/products.service");

const getAllProducts = async (req, res, next) => {
  try {
    const result = await getProducts();
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getProductDetails = async (productId) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
      select: {
        id: true,
        products: {
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
        },
      },
    });

    return product;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get product details.");
  }
};

const createProducts = async (req, res, next) => {
  try {
    const result = await createProductService(req);
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateProducts = async (req, res, next) => {
  try {
    const result = await updateProductService(req);
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProducts = async (req, res, next) => {
  try {
    const result = await deleteProductService(req);
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllProducts, getProductDetails, createProducts, updateProducts, deleteProducts };
