const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const upload = require("../../utils/multer");
const storage = require("../../utils/multer");
const collectionController = require("../../controllers/collections");

/**
 * route:		/api/collections/create
 * description:	login
 * secure: 		public
 */

router.post(
	"/",
	[upload.single("image"), auth],
	collectionController.createCollection
);
router.get("/all", collectionController.getAllCollections);
router.delete("/:id", auth, collectionController.deleteColleciton);
router.get("/:id", collectionController.getCollectionById);
router.get("/:username/:page", collectionController.getCollectionsByPage);
router.get("/user/:username", collectionController.getCollectionsByUsername);
router.put(
	"/",
	[storage.single("image"), auth],
	collectionController.updateCollection
);

module.exports = router;
