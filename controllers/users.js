const jwt = require("jsonwebtoken");
const User = require("../models/User");
const config = require("config");
const bcrypt = require("bcrypt");
const errorMessagesHandler = require("../errorHandle/errorMessagesHandler");
const errorMessages = require("../errorHandle/errorConsts").messages;
const { validationResult } = require("express-validator");

const signToken = (user) => {
	return jwt.sign(user, config.get("jwtSecret"));
};

module.exports = {
	signUp: async (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return errorMessagesHandler(res, errors.array(), 400);

		const { username, password, email, isAdmin } = req.body;
		try {
			let user = await User.findOne({ username });
			if (user)
				return errorMessagesHandler(
					res,
					errorMessages.exists("username"),
					400
				);

			user = await User.findOne({ email });
			if (user)
				return errorMessagesHandler(
					res,
					errorMessages.exists("email"),
					400
				);

			const salt = await bcrypt.genSalt(10);
			const hash = await bcrypt.hash(password, salt);

			let role = (isAdmin && "admin") || "user";

			user = new User({
				username,
				password: hash,
				email,
				role,
			});
			await user.save();

			const payload = {
				username,
				id: user.id,
			};
			const token = signToken(payload);
			res.status(200).json({ token, user });
		} catch (err) {
			res.status(500).json({ message: "server error", errors: err });
		}
	},
	signIn: async (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return errorMessagesHandler(res, errors.array(), 400);

		const { username, password } = req.body;
		try {
			let user = await User.findOne({ username });
			if (!user)
				return errorMessagesHandler(
					res,
					errorMessages.wrong("username"),
					400
				);
			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch)
				return errorMessagesHandler(
					res,
					errorMessages.wrong("password"),
					400
				);

			const payload = {
				id: user.id,
				username,
			};
			const token = signToken(payload);
			res.status(200).json({ token, user });
		} catch (err) {
			res.status(500).json({ message: "server error", errors: err });
		}
	},
	changeRole: async (req, res) => {
		const { username } = req.body;
		try {
			let user = await User.findOne({ username });
			if (!user)
				return errorMessagesHandler(
					res,
					errorMessages.authError(),
					401
				);

			let { role } = user,
				newRole;

			newRole = (role === "user" && "user") || "admin";
			user = await User.findOneAndUpdate(
				{ username },
				{ role: newRole },
				{ new: true }
			);
			res.status(200).json({
				message: "role has been changed successfully!",
				user,
			});
		} catch (err) {
			res.status(500).json({ message: "server error", error: err });
		}
	},
	getUser: async (req, res) => {
		const { username } = req.body;
		try {
			const user = await User.findOne({ username }).select("-password");
			res.status(200).json({ user });
		} catch (err) {
			res.status(500).json({ message: "server error", error: err });
		}
	},
};
