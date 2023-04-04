const carouselText = [
  { text: " Beautiful", color: "red" }, // add a space before the word "Apple"
  { text: " Smart", color: "blue" }, // add a space before the word "Orange"
  { text: " Amazing", color: "black" }, // add a space before the word "Lemon"
  { text: " Special", color: "purple" },
  { text: "Unique", color: "gold" },
];

$(document).ready(async function () {
  carousel(carouselText, "#feature-text");
});

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    if (letters[i] === " ") {
      // add a space element if the character is a space
      $(eleRef).append("");
    } else {
      $(eleRef).append(letters[i]);
    }
    i++;
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function carousel(carouselList, eleRef) {
  var i = 0;
  while (true) {
    updateFontColor(eleRef, carouselList[i].color);
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(1500);
    await deleteSentence(eleRef);
    await waitForMs(500);
    i++;
    if (i >= carouselList.length) {
      i = 0;
    }
  }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css("color", color);
}

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let btn = document.getElementById("startBtn");
let content = document.getElementById("content");
let intro = document.getElementById("intro");
let body = document.getElementById("body");
btn.addEventListener("click", () => {
  intro.style.display = "none";
  content.style.display = "block";
  btn.style.display = "none";
  body.style.background = "none";
  body.style.animation = "none";
});

// making it rain

let rainBtn = document.getElementById("rainBtn");
rainBtn.addEventListener("click", () => {
  body.style.background = "url(loveRain.gif)";
  alert("I LOVE YOU");
});
