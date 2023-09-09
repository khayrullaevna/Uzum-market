import { findElement } from "./helpers.js";
import { templateProducts } from "./helpers.js";
import { renderProducts } from "./helpers.js";
import { BASE_URL } from "./utilities.js";

const elCards = findElement(".cards");



const elForm  = findElement("#form");
const elImage = findElement("#image")

fetch(BASE_URL)
    .then((res) => res.json())
    .then((res) => {
        products = res;
        renderProducts(res, elCards, true);
    })
    .catch((err) => {
        alert(err);
    });

    elCards.addEventListener("click", (evt)=>{
        const target = evt.target;
        if(target.matches(".btn-info")){
            const id = Number(target.dataset.id);
            const elTitle = findElement("#edit-title");
            const elPrice = findElement("#edit-price");
            products.forEach((product) => {
                if (id == product.id){
                    console.log(elTitle.value)

                    elTitle.value = product.name;
                    elPrice.value = product.price;

                    const elBtn = findElement("#save");
                    elBtn.addEventListener('click', ()=>{
                        product.name = elTitle.value;
                        product.price = elPrice.value;
                        fetch(BASE_URL + "/" + id,{
                            method: "PUT",
                            body: JSON.stringify(product)
                        }).then((res)=>res.json())
                        .then((res)=>{
                            console.log(res);
                            window.location.reload();
                        })
                    })
                }
            })
        }
    })

elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const newProduct = JSON.stringify({
        title:evt.target.title.value,
        // description: evt.target.description.value,
        image: elImage.value,
        category:evt.target.category.value,
        price: evt.target.price.value,
        createdAt: new Date().getTime()
    });


    fetch(BASE_URL,{
        method: "POST",
        body:newProduct
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
    })
})

renderProducts(products, elCards, true);




