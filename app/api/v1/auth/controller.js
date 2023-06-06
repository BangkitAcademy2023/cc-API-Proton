const { userRegist, userLogin } = require('../../../services/users.service');
const jwt = require('jsonwebtoken');

const regist = async (req, res, next) => {
  const createdUser = await userRegist(req);
  res.json({
    payload: {
      users: createdUser,
    },
  });
};

const login = async (req, res, next) => {
  const token = await userLogin(req);
  res.json({
    payload: {
      token: token,
    },
  });
};

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });
}

module.exports = { regist, login, generateAccessToken };
