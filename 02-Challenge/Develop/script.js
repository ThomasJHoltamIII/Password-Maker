// Assignment Code
var generateBtn = document.querySelector("#generate");
// Drop Down Menu Code
const generateButton = document.getElementById("generate");
const optionsMenu = document.getElementById("options-menu");
generateButton.addEventListener("click", () => {
  optionsMenu.style.display = optionsMenu.style.display === "block" ? "none" : "block";
});


//Slider code to sync the slider with the number range
const characterAmountRange = document.getElementById (`characterAmountRange`)
const characterAmountNumber = document.getElementById (`characterAmountNumber`)
characterAmountNumber.addEventListener(`input`, syncCharacterAmount)
characterAmountRange.addEventListener(`input`, syncCharacterAmount)
function syncCharacterAmount(e) {
  const value = e.target.value
      characterAmountNumber.value = value
      characterAmountRange.value = value
  }






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);