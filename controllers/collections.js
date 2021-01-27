const cloudinary = require("../utils/cloudinary");
const Collection = require("../models/Collection");
const User = require("../models/User");
const errorMessagesHandler = require("../errorHandle/errorMessagesHandler");
const errorMessages = require("../errorHandle/errorConsts").messages;
const crypto = require("crypto");

module.exports = {
	createCollection: async (req, res) => {
		const { username, name, description, topic } = req.body;
		try {
			if (!name)
				return res
					.status(400)
					.json({ message: "name of collection is required" });

			let user = await User.findOne({ username });
			if (!user)
				return errorMessagesHandler(
					res,
					errorMessages.authError(),
					401
				);

			const id = crypto.randomBytes(16).toString("hex");

			if (!req.file) {
				return res.status(400).json({ message: "image is required" });
			}

			let image = await cloudinary.uploader.upload(req.file.path);
			image = {
				id: image.public_id,
				url: image.secure_url,
			};

			const collection = new Collection({
				id,
				owner: user._id,
				name,
				description,
				topic,
				image,
			});
			await collection.save();

			res.send(collection);
		} catch (err) {
			res.status(500).json({ message: "server error" });
		}
	},
	deleteColleciton: async (req, res) => {
		const { id } = req.params;
		try {
			const collection = await Collection.findOne({ id });
			if (!collection)
				return errorMessagesHandler(
					res,
					errorMessages.notFound("collection"),
					404
				);

			if (collection.image) {
				await cloudinary.uploader.destroy(collection.image.id);
			}
			await collection.remove();
			res.json({ message: "collection has been deleted successfully" });
		} catch (err) {
			res.status(500).json({ message: "server error" });
		}
	},
	getCollectionById: async (req, res) => {
		const { id } = req.params;
		try {
			let collection = await Collection.findOne({ id }).populate(
				"owner",
				"username"
			);
			if (!collection)
				return errorMessagesHandler(
					res,
					errorMessages.notFound("collection"),
					404
				);

			res.json({ collection });
		} catch (err) {
			res.status(500).json({ message: "server error", error: err });
		}
	},
	getCollectionsByUsername: async (req, res) => {
		const { username } = req.params;
		try {
			const user = await User.findOne({ username }).populate(
				"owner",
				"username"
			);
			if (!user)
				return errorMessagesHandler(
					res,
					errorMessages.notFound("user"),
					404
				);

			const userID = user._id;
			const collections = await Collection.find({ owner: userID });
			if (!collections)
				return errorMessagesHandler(
					res,
					"this user does not have any collections",
					404
				);

			res.json({ owner: userID, collections });
		} catch (err) {
			res.status(500).json({ message: "server error" });
		}
	},
	getAllCollections: async (req, res) => {
		try {
			let collections = await Collection.find({}).populate(
				"owner",
				"username role"
			);
			if (!collections)
				return errorMessagesHandler(
					res,
					"ERROR! cant find EVEN ONE collection p_p",
					404
				);

			res.json({ collections });
		} catch (err) {
			res.status(500).json({ message: "server error" });
		}
	},
	getCollectionsByPage: async (req, res) => {
		const { username, page } = req.params;

		try {
			let user = await User.find({ username });
			if (!user)
				return errorMessagesHandler(
					res,
					errorMessages.notFound("user"),
					404
				);

			const id = user[0]._id;
			let collections = await Collection.find({ owner: id }).populate(
				"owner",
				"username role"
			);
			const pages = Math.ceil(collections.length / 6);
			if (collections.length === 0)
				return errorMessagesHandler(
					res,
					"ERROR! cant find EVEN ONE collection p_p",
					404
				);
			const start = page * 6 - 6;
			const end = page * 6 - 1;
			let res_collections = [];
			res_collections = collections.filter(
				(collection, index) => index >= start && index <= end
			);

			if (res_collections.length === 0)
				return errorMessagesHandler(
					res,
					"ERROR! cant find EVEN ONE collection p_p",
					404
				);

			res.status(200).json({ collections: res_collections, pages });
		} catch (err) {
			res.status(500).json({ message: "server error", error: err });
		}
	},
	updateCollection: async (req, res) => {
		const { id, description, topic, name, userID } = req.body;
		try {
			let collection = await Collection.findOne({ id });
			if (!collection)
				return errorMessagesHandler(
					res,
					errorMessages.notFound("collection"),
					404
				);

			if (collection.owner != userID)
				return errorMessagesHandler(
					res,
					errorMessages.privilages("updating", "collection"),
					401
				);

			let image = req.file,
				newImage,
				cloudinaryImage;

			if (image) {
				if (collection.image) {
					await cloudinary.uploader.destroy(collection.image.id);
				}
				cloudinaryImage = await cloudinary.uploader.upload(image.path);
				newImage = {
					id: cloudinaryImage.public_id,
					image: cloudinaryImage.secure_url,
				};
			}

			let collectionFields = {};
			collectionFields.id = id;
			if (description) collectionFields.description = description;
			if (topic) collectionFields.topic = topic;
			if (name) collectionFields.name = name;
			if (newImage) collectionFields.image = newImage;

			let newCollection = await Collection.findOneAndUpdate(
				{ id },
				{ $set: collectionFields },
				{ new: true }
			);
			res.json({ newCollection });
		} catch (err) {
			res.status(500).json({ message: "server error", error: err });
		}
	},
};
