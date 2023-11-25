"use strict";

const kittenList = document.querySelector(".js_list");

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://dev.adalab.es/gato-siames.webp"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">Siamés</h4>
  <p class="card_description">
            Porte elegante, su patrón de color tan característico y sus ojos
            de un azul intenso, pero su historia se remonta a Asía al menos
            hace 500 años, donde tuvo su origen muy posiblemente.
   </p>
</article>
</li>`;

const kittenTwo = `<li class="card">
<img class="card_img" src="https://dev.adalab.es/sphynx-gato.webp" alt="sphynx-cat" />
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">Sphynx</h4>
<p class="card_description">
  Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
  hasta con pinta de alienígena han llegado a definir a esta raza
  gatuna que se caracteriza por la «ausencia» de pelo.
</p>
</li>`;

const kittenThree = `<li class="card">
<img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp" alt="maine-coon-cat" />
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">Maine Coon</h4>
<p class="card_description">
  Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.
</p>
</li>`;

kittenList.innerHTML = kittenOne + kittenTwo + kittenThree;
const formSection = document.querySelector(".js_formSection");
const addButton = document.querySelector(".js_addButton");

addButton.addEventListener("click", (event) => {
  formSection.classList.toggle("collapsed");
});

const btnAdd = document.querySelector(".js-btn-add");

const inputPhoto = document.querySelector(".js-input-photo");
const inputName = document.querySelector(".js-input-name");
const inputBreed = document.querySelector(".js-input-breed");
const inputDesc = document.querySelector(".js-input-desc");
const input_search_desc = document.querySelector(".js_in_search_desc");
const button_search = document.querySelector(".js_btn_search");
const kittenDesc1 = `Porte elegante, su patrón de color tan característico y sus ojos
  de un azul intenso, pero su historia se remonta a Asia al menos
  hace 500 años, donde tuvo su origen muy posiblemente.`;
const kittenDesc2 = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
  hasta con pinta de alienígena han llegado a definir a esta raza
  gatuna que se caracteriza por la «ausencia» de pelo.`;
const kittenDesc3 = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.`;

btnAdd.addEventListener("click", (event) => {
  event.preventDefault();

  //para quitar el submit del botón "Añadir"

  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueBreed = inputBreed.value;

  const newKittenHTML =
    `<li class="card">
  <article>
    <img
      class="card_img"
      src="` +
    valuePhoto +
    `"
      alt="gatito"
    />
    <h3 class="card_title">` +
    valueName +
    `</h3>
    <h4 class="card_race">` +
    valueBreed +
    `</h4>
    <p class="card_description">
        ` +
    valueDesc +
    `
     </p>
  </article>
  </li>`;

  kittenList.innerHTML += newKittenHTML;

  inputBreed.value = "";
  inputDesc.value = "";
  inputName.value = "";
  inputPhoto.value = "";
});

button_search.addEventListener("click", (event) => {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  let resultHTML = "";
  if (kittenDesc1.includes(descrSearchText)) {
    resultHTML += kittenOne;
    console.log("gato uno");
  } else if (kittenDesc2.includes(descrSearchText)) {
    resultHTML += kittenTwo;
    console.log("gato dos");
  } else if (kittenDesc3.includes(descrSearchText)) {
    resultHTML += kittenThree;
    console.log("gato tres");
  }
  kittenList.innerHTML = resultHTML;
});
