"use strict";

const kittenList = document.querySelector(".js_list");

function renderKitten(url, desc, name, race) {
  return `<li class="card">
      <article>
        <img class="card_img" src="${url}" alt="gatito" />
        <h3 class="card_title">${name}</h3>
        <h4 class="card_race">${race}</h4>
        <p class="card_description">${desc}</p>
      </article>
    </li>`;
}

const kittenOne = renderKitten(
  "https://dev.adalab.es/gato-siames.webp",
  "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asia al menos hace 500 años, donde tuvo su origen muy posiblemente.",
  "Anastacio",
  "Siamés"
);

const kittenTwo = renderKitten(
  "https://dev.adalab.es/sphynx-gato.webp",
  "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.",
  "Fiona",
  "Sphynx"
);

const kittenThree = renderKitten(
  "https://dev.adalab.es/maine-coon-cat.webp",
  "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
  "Cielo",
  "Maine Coon"
);

const kittenFour = renderKitten(
  "https://placekitten.com/200/139",
  "Paca es una gata muy buena y sociable",
  "Paca",
  "Fiera"
);

kittenList.innerHTML= kittenOne + kittenTwo + kittenThree + kittenFour;

const formSection = document.querySelector ('.js_formSection');

const addButton = document.querySelector ('.js_addButton');

// addButton.addEventListener ('click', (event) => {formSection.classList.toggle ('collapsed')});

addButton.addEventListener("click", handleClickNewCatForm);

function showNewCatForm() {
  formSection.classList.remove("collapsed");
}
function hideNewCatForm() {
  formSection.classList.add("collapsed");
}
function handleClickNewCatForm(event) {
  event.preventDefault();
  if (formSection.classList.contains("collapsed")) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

const btnAdd = document.querySelector ('.js-btn-add');

const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputBreed = document.querySelector('.js-input-breed');
const inputDesc = document.querySelector('.js-input-desc');

btnAdd.addEventListener ('click', (event) => {
  
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
      src="` + valuePhoto + `"
      alt="gatito"
    />
    <h3 class="card_title">` + valueName + `</h3>
    <h4 class="card_race">` + valueBreed + `</h4>
    <p class="card_description">
        ` + valueDesc + `
     </p>
  </article>
  </li>`;

  kittenList.innerHTML += newKittenHTML;

  inputBreed.value = "";
  inputDesc.value = "";
  inputName.value = "";
  inputPhoto.value = "";
});

const buttonSearch = document.querySelector('.js-btn-search');
const input_search_desc = document.querySelector('.js_in_search_desc');


const kittenDesc1 = `Porte elegante, su patrón de color tan característico y sus ojos
  de un azul intenso, pero su historia se remonta a Asia al menos
  hace 500 años, donde tuvo su origen muy posiblemente.`;
const kittenDesc2 = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
  hasta con pinta de alienígena han llegado a definir a esta raza
  gatuna que se caracteriza por la «ausencia» de pelo.`;
const kittenDesc3 = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.`;

const filterKitten = (event) => {
  const descrSearchText = input_search_desc.value;

  if (kittenDesc1.includes(descrSearchText)) {
    listElement.innerHTML += kittenOne;
  }
  if (kittenDesc2.includes(descrSearchText)) {
    listElement.innerHTML += kittenTwo;
  }
  if (kittenDesc3.includes(descrSearchText)) {
    listElement.innerHTML += kittenThree;
  }
};

buttonSearch.addEventListener('click', filterKitten);
