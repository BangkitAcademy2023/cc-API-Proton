const { getAllUser, createUser } = require("./controller");
const router = require("express").Router();
const { authenticateUser } = require("../../../middlewares/auth");

router.get("/users", getAllUser)

// router.use(authenticateUser);
// router.post("/users", getAllUser);
router.post("/admin", authenticateUser, createUser);

module.exports = router;
