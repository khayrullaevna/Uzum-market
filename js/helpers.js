export function findElement(element, parent = document){
    return parent.querySelector(element)
}

export const templateProducts = findElement("#template-products")

export function renderProducts(array, parent, isAdmin=false){
    parent.innerHTML = null;
    const fragment = document.createDocumentFragment();
    array.forEach(element => {
        const newTemplate = templateProducts.content.cloneNode(true);
        const img = findElement(".card-img-top", newTemplate);
        const title = findElement(".card-title", newTemplate);
        const rating = findElement(".card-rate", newTemplate);
        const count = findElement(".card-count", newTemplate);
        const cost = findElement(".card-cost", newTemplate);
        const likePath1 = findElement(".like-path1", newTemplate);
        const likePath2 = newTemplate.querySelector(".like-path2");
        const elLink = findElement("#link", newTemplate);


        img.src = element.image;
        title.textContent = element.name;
        // rating.textContent = element.rating.rate;
        // count.textContent = element.rating.count + "  (baho)";
        cost.textContent = "$  "+element.price;

        if(elLink){
            elLink.href = `http://127.0.0.1:5500/html/single.html?id=${element.id}`
        }

        if(isAdmin){
            const editBtn = findElement(".btn-info", newTemplate);
            editBtn.dataset.id = element.id;
        }

        // likePath1.setAttribute("fill", element.isFavorite ? "#8967F0" : "white")
        // likePath2.setAttribute("fill", element.isFavorite ? "none" : "#15151A")
        // likePath1.dataset.id = element.id;
        // likePath2.dataset.id = element.id;

        fragment.appendChild(newTemplate)
    });
    parent.appendChild(fragment)
}