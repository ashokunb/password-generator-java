// Assignment code here
//lowercase, uppercase, numbers and special charcters are assigned
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "01234567890";
  var special = "!#$%&'()*+,-./<=>?@[]^_`{}|~";
  
  var uselect = "";
    //ask the user how long they want the passowrd lenght to be
    var passwordl = parseInt(prompt("Choose a password lenght between 8-128 characters: "));
    //making sure that they input the correct data type
    if (passwordl <= 7 || passwordl >= 129) {
      alert("Please put in the correct character lenght");
      return generatePassword();
    }
    //creating the criteria's for what is within the password
    var criteriaLower = confirm('Do you want lowercase letters in your password?');
    var criteriaUpper = confirm("Do you want upercase letters in your password?");
    var criteriaNumbers = confirm("Do you want numbers in your password?");
    var criteriaSpecial = confirm("Do you want special characters in your passowrd?");
    //making sure that they chose at-least one of the options
    if (!criteriaLower && !criteriaUpper && !N && !criteriaspeciaS) {
      alert("Plese choose one of the option criteria's.");
      return generatePassword()
    }
    //while loop is to create a condition to loop our if functions
    while (uselect.length < passwordl) {
      if (criteriaLower) {
        uselect += lowercase[Math.floor(Math.random()*lowercase.length)];
      }
      if (criteriaUpper) {
        uselect += uppercase[Math.floor(Math.random()*uppercase.length)];
      }
      if (criteriaNumbers) {
        uselect += numbers[Math.floor(Math.random()*numbers.length)];
      }
      if (criteriaSpecial) {
        uselect += special[Math.floor(Math.random()*special.length)];
      }
    };
  console.log(uselect);
};
generatePassword()
/*
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/