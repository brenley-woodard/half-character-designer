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
// set state for all of the character's catchphrases
let catchphrase = [];

headDropdown.addEventListener("change", (e) => {
  const value = e.target.value;
  headCount++;
  headEl.style.backgroundImage = `url("./assets/${value}-head.png")`;
  // update the stats to show the new count (call displayStats() to do this work)
});

middleDropdown.addEventListener("change", (e) => {
  const value = e.target.value;
  middleCount++;
  middleEl.style.backgroundImage = `url("./assets/${value}-middle.png")`;
  // update the stats to show the new count (call displayStats() to do this work)
});

bottomDropdown.addEventListener("change", (e) => {
  const value = e.target.value;
  bottomCount++;
  bottomEl.style.backgroundImage = `url("./assets/${value}-pants.png")`;
  // update the stats to show the new count (call displayStats() to do this work)
});

catchphraseButton.addEventListener("click", () => {
  // get the value of the catchphrase input
  // push the new catchphrase to the catchphrase array in state
  // clear out the form input's value so it's empty to the user
  // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
});

function displayStats() {
  // text content of the reportEl to tell the user how many times they've changed each piece of the state
}

function displayCatchphrases() {
  // clear out the DOM for the currently displayed catchphrases
  // loop through each catchphrase in state
  // and for each catchphrase
  // create an HTML element with the catchphrase as its text content
  // and append that HTML element to the cleared-out DOM
}
