const { createUserToken } = require("./createUserToken").default;
const { createCategoriToken } = require("./createProductToken").default
const { createJWT, validateToken } = require("./jwt");

module.exports = {
	createJWT,
	validateToken,
	createUserToken,
	createProductToken,
};