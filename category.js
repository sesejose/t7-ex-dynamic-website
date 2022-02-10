//Fetching the seasons

const url = "https://kea-alt-del.dk/t7/api/seasons";

fetch(url)
  .then(function (res) {
    return res.json();
  })

  //Once we get the "url", we pull out the JSON
  //With the function we ask to return the argument (res) with the json

  .then(function (data) {
    handleSeasons(data);
    console.log(data);
  });

//And then we get the data
//With a function with the argument "data" we callback a function "handleProductList" with the argument "data"
//And of course with define that function down here.
//This function will loop through the data with forEach calling another function that will receive one item
// Esto podria haber sido así: function handleProductList(data) {data.forEach(function (item) {showProduct(item)})}
//But since it is already a function automatically get pass the item, we chose to write just the name of the function and define that function bellow.

function handleSeasons(data) {
  data.forEach(showSeason);
}

/* 
<template id="seasonTemplate">
          <a href="https://kea-alt-del.dk/t7/api//products?season=Fall">
            <div class="seasonName">Fall</div>
          </a>
        </template>
*/
function showSeason(seasons, product) {
  // Grab the product. We We select by ID the content. We define the variable because we're going to use it then.
  const template = document.querySelector("#seasonTemplate").content;
  //Clone it (the product, the template). It is also a variable because we will use it then.
  const clone = template.cloneNode(true);

  //changing the name of the Seasons
  //I select the class and then change its content > the prefix and then ...
  clone.querySelector(".seasonName").textContent = `${seasons.season}`;

  //Linking the Ctegory by season https://kea-alt-del.dk/t7/api/seasons
  clone
    .querySelector("a")
    .setAttribute("href", `productlist.html?season=${product.season}`);

  //Grab Parent of the Season (Sections with id #season). We chose the place where we want to paste the clones.
  const parent = document.querySelector("#seasons");
  //Append / Add product there in the parent in this case.
  parent.appendChild(clone);
}
