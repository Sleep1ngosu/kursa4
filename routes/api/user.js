const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { admin } = require("../../middleware/admin");
const auth = require("../../middleware/auth");
const UserControllers = require("../../controllers/users");

router.post(
	"/sign_up",
	[
		check("username").not().isEmpty().withMessage("username is required"),
		check("password").not().isEmpty().withMessage("password is required"),
		check("email").isEmail().withMessage("wrong email"),
		admin,
	],
	UserControllers.signUp
);
router.post(
	"/sign_in",
	[
		check("username").not().isEmpty().withMessage("username is required"),
		check("password").not().isEmpty().withMessage("password is required"),
	],
	UserControllers.signIn
);
router.get("/", auth, UserControllers.getUser);
router.put("/role", auth, UserControllers.changeRole);

module.exports = router;
