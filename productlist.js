//Fetching the product list

const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
  .then(function (res) {
    return res.json();
  })

  //Once we get the "url", we pull out the JSON
  //With the function we ask to return the argument (res) with the json

  .then(function (data) {
    handleProductList(data);
    console.log(data);
  });

//And then we get the data
//With a function with the argument "data" we callback a function "handleProductList" with the argument "data"
//And of course with define that function down here.
//This function will loop through the data with forEach calling another function that will receive one item
// Esto podria haber sido así: function handleProductList(data) {data.forEach(function (item) {showProduct(item)})}
//But since it is already a function automatically get pass the item, we chose to write just the name of the function and define that function bellow.

function handleProductList(data) {
  data.forEach(showProduct);
}

/* 
<template id="productTemplate">
        <article class="smallProduct">
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
            alt="Sahara Team India Fanwear Round Neck Jersey"
          />
          <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
          <p class="subtle">Tshirts | Nike</p>
          <p class="price"><span>Prev.</span> DKK 1595,-</p>
          <div class="discounted">
            <p>Now DKK 1560,-</p>
            <p>-34%</p>
          </div>
          <a href="product.html">Read More</a>
        </article>
      </template>
*/
function showProduct(product) {
  // Grab the product. We We select by ID the content. We define the variable because we're going to use it then.
  const template = document.querySelector("#productTemplate").content;
  //Clone it (the product, the template). It is also a variable because we will use it then.
  const clone = template.cloneNode(true);
  //Change content of the products
  clone.querySelector(
    ".subtle"
  ).textContent = `${product.articletype} | ${product.brandname}`;
  clone.querySelector("h3").textContent = product.productdisplayname;

  //Linking the products by their IDs
  clone
    .querySelector("a")
    .setAttribute("href", `product.html?id=${product.id}`);

  //Here "if" is by default not sold out so if it is add the class soldOut
  if (product.soldout) {
    clone.querySelector("article").classList.add("soldOut");
  }
  //By default discount is nul, so it is false. We need to calculate
  if (product.discount) {
    clone.querySelector("article").classList.add("onSale");
  }

  //   clone.querySelector(".discounted p").textContent = `Now DKK ` + product.price * product.discount + `,-`;
  clone.querySelector(".discounted p").textContent =
    // `Now DKK ` + `${product.price * (product.discount / 100)}` + `,-`;
    `Now DKK ` + `${(product.price / 100) * product.discount}` + `,-`;

  //Grab Parent of the product. We chose the place where we want to paste the clones.
  const parent = document.querySelector("main");
  //Append / Add product there in the parent in this case.
  parent.appendChild(clone);
}
