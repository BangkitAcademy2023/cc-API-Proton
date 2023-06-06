const { getAllUser, createUser } = require("./controller");
const router = require("express").Router();
const { authenticateToken } = require("../../../middlewares/auth");

router.get("/users", getAllUser)
router.get('/posts', (req, res) => {
	res.json(posts)
})

router.get('/login', (req, res) => {
	// Authenticate User

	const username = req.body.username
	const user = { name: username }

	const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
	res.json({ accessToken: accessToken })
})

// router.use(authenticateUser);
// router.post("/users", getAllUser);
router.post("/admin", authenticateToken, createUser);

module.exports = router;
