const { StatusCodes } = require("http-status-codes");
const {UnauthenticatedError} = require('../../../errors')
const {querySemuaUser} = require("../../../services/products.service")
const {getUser} = require("../../../services/users.service");
const jwt = require('jsonwebtoken')


const getAllUser = async (req, res, next) =>{
	try {
		const result = await getUser();
		res.status(StatusCodes.CREATED).json({
			data: result,
		});
	} catch (error) {
		next(error);
	}
}

const createUser = async (req, res, next) => {
	try {
		// const result = await createCMSUser(req);
		res.status(StatusCodes.CREATED).json({
			data: {},
		});
	} catch (error) {
		next(error);
	}
};

const posts = [
	{
		username: 'miya',
		title: 'post 1',
	},
	{
		username: 'yogi',
		title: 'post 2',
	}
]

module.exports = { getAllUser, createUser, posts };
