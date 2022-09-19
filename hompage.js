const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'a1e7b30b79mshd1b5385548ca25ep12ed9bjsn6548072396a1',
		'X-RapidAPI-Host': 'zappos1.p.rapidapi.com'
	},
	body: '[{"facetField":"zc1","values":["Clothing"]},{"facetField":"zc2","values":["Swimwear","Underwear & Intimates"]},{"facetField":"txAttrFacet_Gender","values":["Women","Girls"]}]'
};

fetch('https://zappos1.p.rapidapi.com/products/list?page=1&limit=100&sort=relevance%2Fdesc', options)
.then((data) => {
    return data.json(); //return data in json format!
  })
  .then((products) => {
    window.alert('we are having some issues returning product info. Please explore another category or try again later.');
   displayProducts(products);
    search(products);
  })
function displayProducts(products) {
  const cards = document.getElementById("cards");
  data1 = "";
  products.results.map((product) => {
    data1 += `  <div id="cards">
    <div class="card">
<img class="product-img" id="img" src=${product.productUrl} onclick="changeImg()"/>
<p class="description">${product.productName}</p>
<p class="amount">${product.price} </p>
 <a href=""> <p class="view">view product</p></a>
<input type="button" class="add" value="add to cart">
</div>
</div>`;
  });
  cards.innerHTML = data1;
}
//search for product //selecting the search bar element
const searchBar = document.getElementById("searchBar");

function search(products) {
  //event for when user releases a key
  searchBar.addEventListener("keyup", (e) => {
    //storing user's value
    const userValue = e.target.value;
    //filter through
    const userSearch = products.results.filter((merchandise) => {
      return merchandise.productName.includes(userValue);
    });
    displayProducts({ results: userSearch });
  });
}
