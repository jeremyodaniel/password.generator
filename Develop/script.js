var generateBtn = document.querySelector("#generate");

function generatePassword() {
// PROMPT USER FOR PASSWORD CRITERIA
//  var criteria = function() { (Commented out this function because you cannot define a function inside another function)
//  Password length betwee 8-128
    var promptLength = window.prompt('Please select Password length between 8-128 characters.');
  
//  Include upper/lowercase, numbers, special characters
    var upperCase = window.confirm('Do you want to use Uppercase letters?')
    var lowerCase = window.confirm('Do you want to use Lowercase letters?')
    var num = window.confirm('Do you want to use Numbers?')
    var special = window.confirm('Do you want to use Special Characters?')

    var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

    var tempArray = [];
    var passwordArray = [];

//  Validate the input (character length is correct and at least one type of character type is chosen)
    if (upperCase) {
      tempArray = tempArray.concat(upperArray);
    }
    if (lowerCase) {
      tempArray = tempArray.concat(lowerArray);
    }
    if (num) {
      tempArray = tempArray.concat(numArray);      
    }
    if (special) {
      tempArray = tempArray.concat(specialArray);
    }
    console.log(tempArray);
//  }



  
  return "Password goes here."
}







// Generate password
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