export const get_last_url_element = () => {
	return window.location.pathname.split('/')[
		window.location.pathname.split('/').length - 1
	]
}
