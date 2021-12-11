// Assignment code here

// GIVEN I need a new, secure password



//WHEN I click the button to generate a password
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//THEN I am presented with a series of prompts for password criteria
var lowerChar = prompt("Do you want lowercase letters?")
var upperChar = prompt("Do you want uppercase letters?")
var numChar = prompt("Do you want numbers?")
var specChar = prompt("Do you want special charaters?")


//WHEN prompted for password criteria



//THEN I select which criteria to include in the password



//WHEN prompted for the length of the password



//THEN I choose a length of at least 8 characters and no more than 128 characters



//WHEN asked for character types to include in the password



//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters



//WHEN I answer each prompt



//THEN my input should be validated and at least one character type should be selected



//WHEN all prompts are answered



//THEN a password is generated that matches the selected criteria
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page


/* 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// string of usable password characters
var characters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()";

// pasword length
var pwlen = 120;
var password ="";

// A for loop to iterate through the character string
for (var i = 0; i < pwlen; i++) {
  // create ranval variable 
  var ranval = Math.floor(Math.random() * characters.length); //6
  // password += characters.substring(6, 7);
  password = password + characters.substring(ranval, ranval + 1 );
}
console.log(password);
*/


