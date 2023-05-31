const { getAllProducts, createProducts, updateProducts, deleteProducts } = require("./controller");

const router = require("express").Router();

const { authenticateUser } = require("../../../middlewares/auth");

router.get("/product", getAllProducts)
router.post("/product", createProducts);
router.put("/product/:id", updateProducts);
router.delete("/product/:id", deleteProducts);
// router.use(authenticateUser);
// router.post("/categories", getAllCategories);

module.exports = router;
