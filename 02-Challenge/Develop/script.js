// Assignment Code
var generateBtn = document.querySelector("#generate");

const password = document.getElementById(`password`);

// Drop Down Menu Code
const generateButton = document.getElementById("generate");
const optionsMenu = document.getElementById("options-menu");
generateButton.addEventListener("click", () => {
  optionsMenu.style.display = optionsMenu.style.display === "block" ? "none" : "block";
});


//Slider code to sync the slider with the number range
const characterAmountRange = document.getElementById (`characterAmountRange`);
const characterAmountNumber = document.getElementById (`characterAmountNumber`);
characterAmountNumber.addEventListener(`input`, syncCharacterAmount);
characterAmountRange.addEventListener(`input`, syncCharacterAmount);
function syncCharacterAmount(e) {
  const value = e.target.value
      characterAmountNumber.value = value
      characterAmountRange.value = value
  };

//Checkbox variables
const includeUppercaseElement = document.getElementById(`includeUppercase`);
const includeNumbersElement = document.getElementById(`includeNumbers`);
const includeSymbolsElement = document.getElementById(`includeSymbols`);


//Extension of Checkbox vairiables, adds an event listener to stop the generate button from refreshing the page,
//This also checks the previous variables for checked value and will include their data if so
//As well it takes the "password" variable and stores the generated text within it and display it on the page
generateBtn.addEventListener("click", e => {
  e.preventDefault();
  const includeUppercase = includeUppercaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;
  const characterAmount = characterAmountNumber.value;
  var password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(characterAmount, includeUppercase, includeNumbers, includeSymbols)
});

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {}

