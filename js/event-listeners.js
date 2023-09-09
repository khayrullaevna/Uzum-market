import { findElement } from "./helpers.js";

// const elCards = findElement(".cards");
const elSearchBtn = findElement("#search-btn");
const elSearchInput = findElement("#search-input");
const elCategory = findElement("#category");
// let favoriteProducts = [];
// let products = [];

const BASE_URL = "https://64f6ae139d7754084952754c.mockapi.io/uzum-market"

elSearchBtn.addEventListener("click", (evt) => {
  const newArray = [];
    products.forEach((product) => {
      if (
        product.title.toLowerCase().includes(elSearchInput.value.toLowerCase())
      ) {
        newArray.push(product);
        renderProducts(products, elCards);
      }
    });
    renderProducts(newArray, elCards);
  });



elCategory.addEventListener("change", (evt) => {
    const newArray = [];
  
    products.forEach((product) => {
      if (product.category === elCategory.value) {
        newArray.push(product);
        renderProducts(products, elCards);
        console.log(elCategory.value);
        console.log(product.category);
      }
    });
    renderProducts(newArray, elCards);
  });
  
  
  // elCards.addEventListener("click", (evt)=>{
  //     if(evt.target.matches("path")) {
  //         const id = Number(evt.target.dataset.id);
  //         cachedData = cachedData.map((product) =>{
  //             if(product.id === id){
  //                 if(!product.isFavorite){
  //                     favoriteProducts.push(product)
  //                 }else{
  //                     favoriteProducts = favoriteProducts.filter((element)=>element.id !== id);                }
  //                 product.isFavorite = !product.isFavorite;
  //             }
  //             return product;
  //         });
  //         renderProducts(cachedData, elCards)
  //         localStorage.setItem("products", JSON.stringify(cachedData))
  //         localStorage.setItem("favorites", JSON.stringify(favoriteProducts))
  
  //     }
  // });