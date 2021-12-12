var generateBtn = document.querySelector("#generate");

function generatePassword() {
// PROMPT USER FOR PASSWORD CRITERIA
  var criteria = function() {
//  Password length betwee 8-128
    var promptLength = window.prompt('Please select Password length between 8-128 characters.');
  
//  Include upper/lowercase, numbers, special characters
    var upperCase = window.prompt('Do you want to use Uppercase letters?')
    var lowerCase = window.prompt('Do you want to use Lowercase letters?')
    var num = window.prompt('Do you want to use Numbers?')
    var special = window.prompt('Do you want to use Special Characters?')
//  Validate the input (character length is correct and at least one type of character type is chosen)
    if (condition) {
      window.alert('Please provide a valid response.');
      return criteria();
    }
  }
  
  return "Password goes here."
}







// Generate pnb assword
// Display the password to the page


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




















/*
// Assignment code here


var lower = "qwertyuiopasdfghjklzxcvbnm";
var upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
var num = "1234567890";
var spec = "!@#$%^&*()";

var pwlength = 8;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function Password() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/

// Assignment code here


// Get references to the #generate element