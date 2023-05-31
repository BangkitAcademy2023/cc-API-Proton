const { StatusCodes } = require("http-status-codes");

const create = async (req, res, next) => {
	try {
		// const result = await createImages(req);
		res.status(StatusCodes.CREATED).json({
			data: {},
		});
	} catch (error) {
		next(error);
	}
};

const index = async (req, res, next) => {
	try {
		// const result = await getImages(req);
		res.status(StatusCodes.OK).json({
			data: {},
		});
	} catch (error) {
		next(error);
	}
};

module.exports = {
	create,
	index,
};
