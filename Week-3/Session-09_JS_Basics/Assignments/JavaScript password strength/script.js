function isStrongPassword(password) {
    if (password.length < 8) {
      return false; // Password is too short
    }
  
    if (password.includes("password")) {
      return false; // Password contains "password"
    }
  
    if (!/[A-Z]/.test(password)) {
      return false; // Password does not contain an uppercase character
    }
  
    return true; // Password meets all the conditions
  }
  
  // Example calls to isStrongPassword()
  console.log(isStrongPassword("Qwerty")); // false - Too short
  console.log(isStrongPassword("passwordQwerty")); // false - Contains "password"
  console.log(isStrongPassword("qwerty123")); // false - No uppercase characters
  console.log(isStrongPassword("Qwerty123")); // true
  