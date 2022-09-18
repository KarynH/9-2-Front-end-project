const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a1e7b30b79mshd1b5385548ca25ep12ed9bjsn6548072396a1",
    "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
  },
};

fetch(
  "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=36&categories=men_all&concepts=H%26M%20MAN",
  options
)
  .then((data) => {
    return data.json(); //return data in json format!
  })
  .then((products) => {
    console.log(products.results);
    displayProducts(products);
    search(products);
  });

function displayProducts(products) {
  const cards = document.getElementById("cards");
  data1 = "";
  products.results.map((product) => {
    data1 += `  <div id="cards">
    <div class="card">
<img class="product-img" id="img" src=${product.images[0].url} onclick="changeImg()"/>
<p class="description">${product.name}</p>
<p class="amount">${product.price.formattedValue} </p>
 <a href="${product.galleryImages[1].url}"> <p class="view">view product</p></a>
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
      return merchandise.name.includes(userValue);
    });
    displayProducts({ results: userSearch });
  });
}

// function addtoCart(products) {
//   const buttons = document.querySelectorAll("add");
//   buttons.addEventListener()


//console.log(e)

//  }) .catch((err) => {
//     console.log(err);
//console.log(e.target.value)
//const userValue = e.target.value
