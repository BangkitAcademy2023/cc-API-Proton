const { getAllStores, createStores, updateStores, deleteStores } = require("./controller");

const router = require("express").Router();


router.get("/store", getAllStores)
router.post("/store", createStores);
router.put("/store/:id", updateStores);
router.delete("/store/:id", deleteStores);
// router.use(authenticateUser);
// router.post("/categories", getAllCategories);

module.exports = router;
