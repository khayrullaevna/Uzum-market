import { findElement } from "./helpers.js";
import { BASE_URL } from "./utilities.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const elTitle = findElement("#title");
const elPrice = findElement("#price");
const elCategory = findElement("#category");
const elImg = findElement("#img");

fetch(BASE_URL+"/"+id)
.then((res)=>res.json())
.then((res)=>{
    console.log(res)
    elTitle.textContent = res.name;
    elPrice.textContent = res.price;
    elCategory.textContent = res.category;
    elImg.src = res.image;

});