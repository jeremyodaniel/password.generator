// Assignment code here


var characters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()";

var pwlen = 1;
var password ="jeremy";

for (var i = 0; i < pwlen; i++) {
  var ranval = Math.floor(Math.random() * characters.length);
  password = password + " odaniel";
}
console.log(password);



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
