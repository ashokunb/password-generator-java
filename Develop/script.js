// Assignment code here
//lowercase, uppercase, numbers and special charcters are assigned
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "01234567890";
  var special = "!#$%&'()*+,-./<=>?@[]^_`{}|~";
  
  var uselect = "";
    //ask the user how long they want the passowrd length to be
    var passwordl = parseInt(prompt("Choose a password length between 8-128 characters: "));
    //making sure that they input the correct data type
    if (passwordl <= 7 || passwordl >= 129 ) {
      alert("Please put in the correct character length");
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
          //checking to see if our password already meets the length criteria
          if (uselect.length === passwordl) {
            break;
          };
      }
      if (criteriaUpper) {
        uselect += uppercase[Math.floor(Math.random()*uppercase.length)];
           //checking to see if our password already meets the length criteria
           if (uselect.length === passwordl) {
            break;
          };
      }
      if (criteriaNumbers) {
        uselect += numbers[Math.floor(Math.random()*numbers.length)];
          //checking to see if our password already meets the length criteria
          if (uselect.length === passwordl) {
            break;
          };
      }
      if (criteriaSpecial) {
        uselect += special[Math.floor(Math.random()*special.length)];
          //checking to see if our password already meets the length criteria
          if (uselect.length === passwordl) {
            break;
          };
      };
    };
  console.log("Your password length is: " + passwordl);
  console.log("Your password is: " + uselect);
  
  return uselect
};

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
