/* Fetching the parameters */

//What is window.location.search??
const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get("id");

const url = "https://kea-alt-dk/t7/api/products/" + id;

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
    console.log(data);
  });

function showProduct(product) {
  // console.log(product);
  //Changing the image
  // document.querySelector(
  //   "img.productimage"
  // ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
}
