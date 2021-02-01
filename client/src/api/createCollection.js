// import { header } from 'express-validator'
// import axios from '../utils/axios'
// // import toFormData from 'to-formdata'
// import { serialize } from 'object-to-formdata'

// export const createCollection = async (image, data) => {
// 	try {
// 		const URI = '/api/collections'
// 		const body = {
// 			name: data.title,
// 			description: data.description,
// 			topic: data.topic[0].label,
// 			image,
// 		}
// 		const formData = serialize(body)
// 		const config = {
// 			headers: {
// 				'Content-Type': 'multipart/formData',
// 			},
// 		}
// 		const response = await axios.post(URI, formData, config)
// 		console.log(response)
// 	} catch (err) {
// 		console.log(err.response.data)
// 	}
// }
