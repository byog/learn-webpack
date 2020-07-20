function filterByTerm(inputArr, searchTerm) {
	if (!inputArr.length) {
		throw Error("inputarr can't be empty")
	}

	const regex = new RegExp(searchTerm, 'i')

	return inputArr.filter(function (arrayElement) {
		return arrayElement.url.match(regex)
	})
}

export default filterByTerm
