export function chunk(arr, chunkSize, cache = []) {
	const tmp = [...arr];
	while (tmp.length) cache.push(tmp.splice(0, chunkSize));
	return cache;
}
