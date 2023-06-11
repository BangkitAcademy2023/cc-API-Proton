const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

//routes
const imagesRouter = require("./app/api/v1/images/router");
const usersRouter = require("./app/api/v1/users/router");
const productRouter = require("./app/api/v1/product/router");
const storeRouter = require("./app/api/v1/store/router")
const authRouter = require("./app/api/v1/auth/router");

//middlewares
const NotFoundMiddleware = require("./app/middlewares/not-found");
const errorHandlerMiddleware = require("./app/middlewares/error-handler");

const app = express();
const v1 = "/api/v1/cms";

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	return res.status(200).json({
		message: "Ini adalah restful api",
	});
});
app.use(`${v1}/images`, imagesRouter);
app.use(`${v1}`, usersRouter);
app.use(`${v1}`, productRouter);
app.use(`${v1}`, storeRouter);
app.use(`${v1}`, authRouter);

app.use(NotFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app;






// app.use(`${v1}/categories`, categoriesRouter)
// app.use(`${v1}/categories`,(req, res) => {
// 	return res.status(200).json({
// 		message: "route categories",
// 	});
// })