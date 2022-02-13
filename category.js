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
//With a function with the argument "data" we callback a function "handleProductList" with the argument "data".
//This function will loop through the data with forEach calling another function "showSeason" that will receive one item.
// Esto podria haber sido así: function handleProductList(data) {data.forEach(function (item) {showProduct(item)})}
//But since it is already a function automatically get pass the item, we chose to write just the name of the function and define that function bellow.

//This function was before, now I use the data from the variable images
function handleSeasons(data) {
  // data.forEach(showSeason);
}

//Array images to backgrounds in seasons
const images = [
  {
    img: "https://kea-alt-del.dk/t7/images/webp/1000/1528.webp",
    season: "Fall",
  },
  {
    img: "https://kea-alt-del.dk/t7/images/webp/1000/2127.webp",
    season: "Spring",
  },
  {
    img: "https://kea-alt-del.dk/t7/images/webp/1000/1575.webp",
    season: "Summer",
  },
  {
    img: "https://kea-alt-del.dk/t7/images/webp/1000/1877.webp",
    season: "Winter",
  },
];

//My Array calls "images"
//I do something forEach and call a function named "showSeason".
images.forEach(showSeason);

//Then I write what that function does.
//The argument (img) indicates that it will receive one image at a time.
//First we select the content of the template. We create a variable and select the template in DOM by its ID and then its content.
//Then we create a copy (we clone it with cloneNode(true)): we create a variable called "clone" and say to that "template" selected clone!.

function showSeason(product) {
  // Grab the product. We We select by ID the content. We define the variable because we're going to use it then (also the argument "product"!).
  const template = document.querySelector("#seasonTemplate").content;
  //Clone it (the product, the template). It is also a variable because we will use it then.
  const clone = template.cloneNode(true);

  //Here I am changing the name of the Seasons
  //I select the class and then change the text in there.
  clone.querySelector(".text").textContent = `${product.season}`;

  //Linking the Ctegory by season https://kea-alt-del.dk/t7/api/seasons
  clone
    .querySelector("a")
    .setAttribute("href", `productlist.html?season=${product.season}`);

  //Adding background image
  clone
    .querySelector(".seasonName")
    .setAttribute("style", `background-image: url(${product.img});`);

  //Grab Parent of the Season (Sections with id #season). We chose the place where we want to paste the clones.
  const parent = document.querySelector("#seasons");
  //Append / Add product there in the parent in this case.
  parent.appendChild(clone);
}
