import { findElement } from "./helpers.js";
import { templateProducts } from "./helpers.js";
import { renderProducts } from "./helpers.js";
import { BASE_URL } from "./utilities.js";


const elCards = findElement(".cards");
const elLoginBtn = findElement("#login-btn");
const header = findElement(".header")
const authBtn = findElement("#save")
const emailInput = findElement("#auth-email")
const passwordInput = findElement("#auth-password")

let favoriteProducts = [];
let products = [];

fetch(BASE_URL)
    .then(res=>res.json())
    .then((json)=>{
      console.log(json)
        products = json;
        renderProducts(products, elCards);
        }).catch(err=>alert(err))

renderProducts(products, elCards);


let isLogin = localStorage.getItem("login") === 'true' ? true : false;

if (isLogin) {
    elLoginBtn.textContent = "Chiqish";
    const newLink = document.createElement("a");
    newLink.href = "../html/admin.html";
    newLink.textContent = "Admin sahifasi";
    header.appendChild(newLink);
}

elLoginBtn.addEventListener("click", (evt)=>{
    if(!isLogin){
      const newLink = document.createElement("a");
      newLink.href = "../html/admin.html";
      newLink.textContent = "Admin Page"
      header.appendChild(newLink)
      isLogin = true;
      elLoginBtn.textContent = "Chiqish"
      localStorage.setItem("login", true);
    }else{
      elLoginBtn.textContent = "Kirish";
      header.innerHTML = null;
      header.appendChild(elLoginBtn);
      isLogin = false;
      localStorage.setItem("login", false)
    }
})


authBtn.addEventListener("click", function() {
    const obj = {
        email: emailInput.value,
        password: passwordInput.value,
    };

    const authPost = async () => {
      const res = await fetch("https://reqres.in/api/login", {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
              "Content-Type": "application/json",
          },
      });

      const data = await res.json();
      if(data.token){
        localStorage.setItem("token", data.token);

        const newLink = document.createElement("a");
        newLink.href = "../html/admin.html";
        newLink.textContent = "Admin sahifasi"
        header.appendChild(newLink)
        isLogin = true
        elLoginBtn.textContent = "Chiqish";
        localStorage.setItem("login",true)
      }
    }
    authPost();
})

