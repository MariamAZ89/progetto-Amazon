const spiner = document.getElementById("spinner");
const row = document.getElementById("row");
const buttonDark = document.getElementById("dark");
const body = document.getElementById("body");
const nav = document.getElementById("nav");
let s_n = 0;

const createCard = (item) => {
  row.innerHTML += `


<div class="col g-3 ">
<div class="card h-100 shadow-lg ">
<div class="container w-75">

  <img src="${item.imageUrl}" class="card-img-top w-100 " alt="...">
  
  </div>
  <div class="card-body d-flex flex-column justify-content-evenly  align-items-center  ">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.description}</p>
    
    </div>

    <div class="card-footer d-flex justify-content-between align-items-center ">
    
    <div class="btn-group border mx-2" role="group" aria-label="Basic example">
    <a href="./dettail.html?id=${item._id}" class="btn btn-primary btn-sm  mybtn">Scopri di piu</a>
    <a href="./backOffice.html?id=${item._id}" class="btn btn-secondary btn-sm mybtn ">Modifica</a>
    </div>
    <div>
    <p class="card-text ">Prezzo: ${item.price}€
    </div>
</div>
</div>


`;
};

const pressNight = () => {
  buttonDark.addEventListener("click", () => {
    s_n = localStorage.getItem("night");
    s_n++;

    let card = document.querySelectorAll(".card");
    buttonDark.classList.toggle("bi-moon");
    buttonDark.classList.toggle("bg-secodnary");
    buttonDark.classList.toggle("btn-outline-dark");
    buttonDark.classList.toggle("btn-outline-secondary");
    body.classList.toggle("bg-dark");
    body.classList.toggle("bg-gradient");
    body.classList.toggle("text-white");
    nav.classList.toggle("bg-dark");
    nav.classList.toggle("text-light");

    card.forEach((el) => {
      el.classList.toggle("bg-dark");
      el.classList.toggle("bg-gradient");
      el.classList.toggle("border");
      el.classList.toggle("border-3");
      el.classList.toggle("border-secondary");
    });
  

