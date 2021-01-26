const Collection = require('../models/Collection')
const crypto = require('crypto')
const errorMessagesHandler = require('../errorHandle/errorMessagesHandler')
const errorMessages = require('../errorHandle/errorConsts').messages
const { validationResult } = require('express-validator')

module.exports = {
	addComment: async (req, res, next) => {
		const errors = validationResult(req)
		if (!errors.isEmpty())
			return errorMessagesHandler(res, errors.array(), 400)

		const { username, id, text } = req.body
		try {
			let collection = await Collection.findOne({ id })
			let commentID = crypto.randomBytes(32).toString('hex')
			let comment = {
				username,
				text,
				id: commentID,
				date: Date.now(),
			}
			let newComments = [...collection.comments, comment]
			collection = await Collection.findOneAndUpdate(
				{ id },
				{ comments: newComments },
				{ new: true }
			)

			res.json({ comment })
		} catch (err) {
			res.status(500).json({ message: 'server error', error: err })
		}
	},
	deleteComment: async (req, res, next) => {
		const errors = validationResult(req)
		if (!errors.isEmpty())
			return res.status(400).json({ errors: errors.array() })

		const { username, collectionID, commentID, userID } = req.body
		try {
			let collection = await Collection.findOne({ id: collectionID })
			if (!collection)
				return errorMessagesHandler(
					res,
					errorMessages.notFound('collection'),
					404
				)

			if (userID != collection.owner)
				return errorMessagesHandler(
					res,
					errorMessages.privilages('deleting', 'comment'),
					401
				)

			let index, comment
			collection.comments.forEach((cur_comment, cur_index) => {
				if (cur_comment.id === commentID) {
					index = cur_index
					comment = cur_comment
				}
			})

			if (!comment)
				return errorMessagesHandler(
					res,
					errorMessages.notFound('comment'),
					404
				)

			if (username !== comment.username)
				return errorMessagesHandler(
					res,
					errorMessages.privilages('deleting', 'comment'),
					401
				)

			let newComments = collection.comments.filter(
				(cur_comment) => cur_comment.id !== commentID
			)
			collection = await Collection.findOneAndUpdate(
				{ id: collectionID },
				{ comments: newComments },
				{ new: true }
			)
			res.status(204).send()
		} catch (err) {
			res.status(500).json({ message: 'server error', error: err })
		}
	},
}
