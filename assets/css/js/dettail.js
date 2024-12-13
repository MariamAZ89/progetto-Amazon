let image = document.getElementById("img");
let NameP = document.getElementById("name");
let description = document.getElementById("description");
let brand = document.getElementById("brand");
let url_P = document.getElementById("textUrl");
let price = document.getElementById("price");
let ID = document.getElementById("_ID");
const id_url = new URLSearchParams(window.location.search).get("id");
const spiner = document.getElementById("spinner");
console.log(id_url);
s_n = localStorage.getItem("night");
let body = document.getElementById("body");
let nav = document.getElementById("nav");
let buttonDark = document.getElementById("dark");

const infoItem = (items) => {
  image.setAttribute("src", items.imageUrl);
  NameP.innerText = items.name;
  description.innerText = items.description;
  brand.innerText = items.brand;
  url_P.value = items.imageUrl;
  price.value = items.price;

};

if (s_n == 1) {
  buttonDark.classList.toggle("bi-moon");
  buttonDark.classList.toggle("bg-secodnary");
  buttonDark.classList.toggle("btn-outline-dark");
  buttonDark.classList.toggle("btn-outline-secondary");
  body.classList.toggle("bg-dark");
  body.classList.toggle("bg-gradient");
  body.classList.toggle("text-white");

}

const getItem = async () => {
  try {
    let resposive = await fetch(url + id_url, {
      method: "GET",
      headers: {
        Authorization: myAPI,
        "Content-Type": "application/json",
      },
    });
  
