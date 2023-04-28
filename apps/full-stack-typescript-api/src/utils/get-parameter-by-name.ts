export function getParameterByName(name, url) {
	const newName = name.replace(/[[\]]/g, '\\$&');
	const regex = new RegExp('[?&]' + newName + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
