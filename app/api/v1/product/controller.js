const { StatusCodes } = require("http-status-codes");
const { getProducts, getProductByNama, createProductService, updateProductService, deleteProductService } = require("../../../services/products.service");

const getAllProducts = async (req, res, next) => {
  try {
    const { name } = req.query;
    let result;

    if (name) {
      result = await getProducts(name);
    } else {
      result = await getProducts();
    }

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getProductDetails = async (req, res, next) => {
  try {
    const { namaProduk } = req.params;
    const result = await getProductByNama(namaProduk);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
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
