const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a1e7b30b79mshd1b5385548ca25ep12ed9bjsn6548072396a1",
    "X-RapidAPI-Host": "apidojo-forever21-v1.p.rapidapi.com",
  },
};

fetch(
  "https://apidojo-forever21-v1.p.rapidapi.com/products/v2/list?category=women_main&pageSize=28&pageNumber=5&sortby=5",
  options
)
  .then((data) => {
    return data.json(); //return data in json format!
  })
  .then((products) => {
    // console.log(products.CatalogProducts.DefaultProductImage);
    displayProducts(products);
    search(products);
  });
function displayProducts(products) {
  const cards = document.getElementById("cards");
  data1 = "";
  products.CatalogProducts.map((products) => {
    data1 += `  <div id="cards">
      <div class="card">
      <img class="product-img" id="img" src=${products.DefaultProductImage} onclick="changeImg()"/>
  <p class="description">${products.DisplayName}</p>
  <p class="amount">$${products.OriginalPrice} </p>
   <a href="${products.ProductShareLinkUrl}"> <p class="view">view product</p></a>
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
    const userSearch = products.CatalogProducts.filter((merchandise) => {
      return merchandise.DisplayName.includes(userValue);
    });
    displayProducts({ CatalogProducts: userSearch });
  });
}

//   function addtoCart(products) {
//     const buttons = document.querySelectorAll("add");
//     buttons.addEventListener("click")
//   }
