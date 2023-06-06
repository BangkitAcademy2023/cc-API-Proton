const prisma = require("../utils/prisma");
const bcrypt = require('bcrypt');
const httpStatus = require('http-status');
const { createJWT } = require('../utils/jwt');
const BadRequest = require("../errors/bad-request");
const { UnauthorizedError } = require("../errors");

async function getUser() {
    const user = await prisma.user.findMany();
    return user;
  }

async function userRegist(req) {
    const { name, email, password, confirmPassword } = req.body;
    if (!email) throw new BadRequest("email required");
    if (!password) throw new BadRequest("password required");
    if (password !== confirmPassword) throw new BadRequest("password do not match");
    if (password.length < 8) throw new BadRequest("password must be at least 8 characters");
    const checkEmail = await prisma.user.findUnique({
      where: {
        email: email
      }
    });
    const salt = await bcrypt.genSalt(10);
    const hasheadPassword = await bcrypt.hash(password, salt);
    if (checkEmail) throw new BadRequest( "email has been used");
  
    const userCreate = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hasheadPassword
      }
    });
  
    const token = await createJWT({
      name: userCreate.name,
      id: userCreate.id
    });
  
    return token;
  }

async function userLogin(req) {
    const { email, password } = req.body;
    if (!email) throw new BadRequest( "email required");
    if (!password) throw new BadRequest( "password required");
  
    const checkEmail = await prisma.user.findUnique({
      where: {
        email: email
      }
    });
  
    if (!checkEmail) throw new BadRequest( "email not found");
  
    const isLogin = await bcrypt.compare(password, checkEmail.password);
    if (!isLogin) throw new UnauthorizedError("invalid credentials");
  
    const token = await createJWT({
      name: checkEmail.name,
      id: checkEmail.id
    });
  
    return token;
}
  



module.exports = {getUser, userRegist, userLogin}