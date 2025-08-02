"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");
const celebrationGif = document.querySelector(".celebration-gif");

const MAX_IMAGES = 10;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
      noButton.classList.add("hidden");
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML =
    "Sii ya sabia que ibas a decir que si, es una cita. Paso por vos el lunes a las 5pm a tu casa, solo ponte linda para mi";
  titleElement.classList.add("positive"); // <- aquí le aplicás el color
  buttonsContainer.classList.add("hidden");

  catImg.classList.add("hidden");
  celebrationGif.classList.remove("hidden");

  function createLantern() {
    const lantern = document.createElement("div");
    lantern.classList.add("lantern");

    lantern.style.left = `${Math.random() * 100}vw`;
    lantern.style.animationDuration = `${4 + Math.random() * 4}s`;
    lantern.style.transform = `scale(${0.5 + Math.random() * 0.5})`;

    document.body.appendChild(lantern);

    setTimeout(() => {
      lantern.remove();
    }, 8000); // desaparece después del vuelo
  }

  // Generar varias lámparas seguidas
  for (let i = 0; i < 30; i++) {
    setTimeout(createLantern, i * 300); // 1 cada 300ms
  }

  document.body.classList.add("rapunzel-scene");
  document.getElementById("photo1").classList.remove("hidden");
  document.getElementById("photo2").classList.remove("hidden");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.46;
  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Estas segura?",
    "Mi rubia por favor",
    "Que feisimo :(",
    "Estas rompiendole el corazon a bailey",
    "Camaliyona no seas asi",
    "Ahhh va",
    "q feo",
    "Ojala te encojas 3 cm",
    "rubia...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
