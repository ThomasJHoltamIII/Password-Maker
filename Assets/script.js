// Assignment Code
var generateBtn = document.querySelector("#generate");
const password = document.getElementById(`password`);


// Drop Down Menu Code
const generateButton = document.getElementById("generate");
const optionsMenu = document.getElementById("options-menu");

generateButton.addEventListener("click", () => {
  optionsMenu.style.display = "block";
});



//An Array built to log a string of numbers to be pulled for character codes
function arrayLog(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
      array.push(i)
  }
  return array
}


//A set of variables to bind the arrays # for use as charchter codes, can be viewed in console log
const upperLog = arrayLog (65, 90)
const lowerLog = arrayLog (97, 122)
const numberLog = arrayLog (48, 57)
const symbolLog = arrayLog (33, 47).concat(
  arrayLog (58,64)).concat(
    arrayLog (91,96)).concat(
      arrayLog (123,126))


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

//generates a password by randomly selecting characters from the combined character codes and returns the password as a string.
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) { let charCodes = lowerLog;
  if (includeUppercase) charCodes = charCodes.concat(upperLog);
  if (includeSymbols) charCodes = charCodes.concat(symbolLog);
  if (includeNumbers) charCodes = charCodes.concat(numberLog);
  
  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
      const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
      passwordCharacters.push(String.fromCharCode(characterCode));
  }

  return passwordCharacters.join('');
}

//Extension of Checkbox vairiables, checks if the are true or flase
// Adds an event listener to stop the generate button from refreshing the page
//As well it takes the "password" variable and stores the generated text within it and display it on the page
//Can be viewed in console log
generateBtn.addEventListener("click", e => {
  e.preventDefault();
  const includeUppercase = includeUppercaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;
  const characterAmount = characterAmountNumber.value;
  var password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(characterAmount, includeUppercase, includeNumbers, includeSymbols, upperLog, lowerLog, numberLog, symbolLog)
});




