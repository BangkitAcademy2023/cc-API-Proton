const { UnauthorizedError, UnauthenticatedError } = require("../errors");
const { validateToken } = require("../utils/jwt");
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

function authenticateToken(req, res, next) {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (token == null) return res.sendStatus(401);
  
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
	  console.log(err);
	  if (err) return res.sendStatus(403);
	  req.user = user;
	  next();
	});
}

const authorizeRoles = (...roles) => {
	return (req, res, next) => {
	  if (!roles.includes(req.user.role))
		throw new UnauthorizedError("Unauthorized User!");
	  next();
	};
  };


module.exports = { authenticateToken, authorizeRoles };
