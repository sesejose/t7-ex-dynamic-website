//Making the URL a variable

const url = "https://kea-alt-del.dk/t7/api/products/1525";

//fetch the data
fetch(url)
  //when we get a response from the server respond with res.json()
  .then((res) => res.json())
  //we get the data (we can call it whatever we want) call the function showProduct(); and that function will receive the data
  .then((data) => showProduct(data));
//populate the page

//we define the function and that function will receive the data but this time we call it something different: "product"
function showProduct(product) {
  console.log(product); //here product
  //console.log calls the variable product with all the data; so when we open the html file (with this .js) in the browser and open the Inspector/Console we can see all the data from that URL for the product.
  //The following is to change the content in the HTML file
  //First we fetch a link for example.
  //I start by selecting an HTML element, a div, by its class ".brand" or ".productname" but it is inside another div with another class ".breadcrumb" si we use both classes.
  document.querySelector(".breadcrumbs .brand").textContent = product.brandname;
  document.querySelector(".breadcrumbs .productname").textContent =
    product.productdisplayname;

  // now I change the image. I select the image that has the class ".productimage"
  /*
    <img
        src="https://kea-alt-del.dk/t7/images/webp/1000/1163.webp"
        alt="Sahara Team India Fanwear Round Neck Jersey"
      />
    */
  document.querySelector(
    "img.productimage"
  ).scr = `https://kea-alt-del.dk/t7/images/jpg/1000/1525.jpg`;
  document.querySelector("img.productimage").alt = product.productdisplayname;
}
//if I want to display another product I should change the number of the product in the URL (1525 by 1163)
