/* Fetching the parameters */

//https://kea-alt-del.dk/t7/api/products?season=Spring

//What is window.location.search??
const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
const id = urlParams.get("id");

const url = "https://kea-alt-del.dk/t7/api/products/" + id;

// console.log(id);

//Fetch the data

fetch(url)
  .then(function (res) {
    return res.json();
  })

  //Once we get the "url", we pull out the JSON
  //With the function we ask to return the argument (res) with the json

  .then(function (data) {
    showProduct(data);
  });

//Populate the page

function showProduct(product) {
  //Changing the image
  // document.querySelector(
  //   "img.productimage"
  // ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

  document.querySelector(
    "img.productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

  document.querySelector("img.productimage").alt = product.productdisplayname;

  document.querySelector(".breadcrumbs .season").textContent =
    product.brandname;
  document.querySelector(".breadcrumbs .productname").textContent =
    product.productdisplayname;

  document.querySelector(".purchaseBox h3").textContent =
    product.productdisplayname;

  document.querySelector(".purchaseBox p").textContent =
    `${product.brandname}` + ` | ` + `${product.articletype}`;

  document.querySelector(".discounted #discount").textContent =
    `${product.discount}` + `%`;

  document.querySelector(".description .mod p").textContent =
    product.productdisplayname;

  document.querySelector(".description .cat p").textContent = product.category;

  document.querySelector(".description .no p").textContent = product.id;

  document.querySelector(".info .brand").textContent = product.brandname;
}
