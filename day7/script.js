const fetch = require('cross-fetch');

const http = require("http");

let page;


const fs = require('fs');

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(json => console.log(json));

const data = fs.readFileSync('./data.json','utf-8');

const dataObj = JSON.parse(data);

//console.log(dataObj);

const htmlTemplate = fs.readFileSync('./page.html','utf-8');

const cardTemplate = fs.readFileSync('./card.html','utf-8');

// const card1 = cardTemplate
//   .replace("__TITLE__", "Xiaomi Note 11 pro")
//   .replace("__INFO__", "CHINESE Manufacturer");

// const card2 = cardTemplate
//   .replace("__TITLE__", "Apple iphone 11")
//   .replace("__INFO__", "CHINESE Manufacturer....");

//   let allCards = card1 + card2;






const server = http.createServer((req, res) => {
    console.log("request recieved");
    console.log(req.url);
    
    res.writeHead(200, {
        "content-type": "text/html",
    });
    
    let products = dataObj.products;

    for(let i=0; i<dataObj.products.length;i++)
    { 
        const card1 = cardTemplate
        .replace("__BRAND__",products[i].brand)
        .replace("__TITLE__", products[i].title)
        .replace("__PRICE__","Price: $ " + products[i].price)
        .replace("__RATING__","Rating: " + products[i].rating)
        .replace("__INFO__", products[i].description)
        .replace("IMAGE",products[i].images[0])
        .replace("LINK",products[i].link);
        
        page = htmlTemplate.replace("__PRODUCTS_CARDS__", card1);
      res.write(page);
  } 
  res.end();
});

server.listen(1400, () => {
  console.log(".....server..started.......");
});

