const { StatusCodes } = require("http-status-codes");
const {UnauthenticatedError} = require('../../../errors')
const {querySemuaUser} = require("../../../services/stores.service")
const {getStores, createStoreService, updateStoreService, deleteStoreService} = require("../../../services/stores.service");


const getAllStores = async (req, res, next) => {
	try {
        const result = await getStores();
		res.status(StatusCodes.CREATED).json({
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

const createStores = async (req, res, next) => {
	try {
		const result = await createStoreService(req);
		res.status(StatusCodes.CREATED).json({
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

const updateStores = async (req, res, next) => {
	try {
		const result = await updateStoreService(req);
		res.status(StatusCodes.CREATED).json({
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

const deleteStores = async (req, res, next) => {
	try {
		const result = await deleteStoreService(req);
		res.status(StatusCodes.CREATED).json({
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = { getAllStores, createStores, updateStores, deleteStores };
