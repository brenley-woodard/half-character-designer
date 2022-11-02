// import functions and grab DOM elements
const headDropdown = document.getElementById("head-dropdown");
const middleDropdown = document.getElementById("middle-dropdown");
const bottomDropdown = document.getElementById("bottom-dropdown");
const headEl = document.getElementById("head");
const middleEl = document.getElementById("middle");
const bottomEl = document.getElementById("bottom");
const reportEl = document.getElementById("report");
const catchphrasesEl = document.getElementById("catchphrases");
const catchphraseInput = document.getElementById("catchphrase-input");
const catchphraseButton = document.getElementById("catchphrase-button");

let headCount = 0;
let middleCount = 0;
let bottomCount = 0;

let catchphrases = [];

headDropdown.addEventListener("change", (e) => {
  const value = e.target.value;
  headCount++;
  headEl.style.backgroundImage = `url("./assets/${value}-head.png")`;
  displayStats();
});

middleDropdown.addEventListener("change", (e) => {
  const value = e.target.value;
  middleCount++;
  middleEl.style.backgroundImage = `url("./assets/${value}-middle.png")`;
  displayStats();
});

bottomDropdown.addEventListener("change", (e) => {
  const value = e.target.value;
  bottomCount++;
  bottomEl.style.backgroundImage = `url("./assets/${value}-pants.png")`;
  displayStats();
});

catchphraseButton.addEventListener("click", () => {
  const catchphraseValue = catchphraseInput.value;
  catchphrases.push(catchphraseValue);
  catchphraseInput.value = "";
  displayCatchphrases();
});

function displayStats() {
  reportEl.textContent = `You have changed the head ${headCount} times, the body ${middleCount} times,
   and the pants ${bottomCount} times.`;
}

function displayCatchphrases() {
  catchphrasesEl.textContent = "";

  for (let catchphrase of catchphrases) {
    const p = document.createElement("p");
    p.textContent = catchphrase;
    catchphrasesEl.append(p);
  }
}

displayStats();
