const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a1e7b30b79mshd1b5385548ca25ep12ed9bjsn6548072396a1',
		'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
	}
};

fetch('https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));