function validateCredentials() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Define the valid credentials
    var validUsername = "admin";
    var validPassword = "password";
  
    if (username === validUsername && password === validPassword) {
      // Redirect to the desired web page
      window.location.href = "https://www.calebuniversity.edu.ng/";
      return false; // Prevent form submission (optional)
    } else {
      var errorMsg = document.getElementById("error-msg");
      errorMsg.textContent = "Invalid username or password.";
      return false; // Prevent form submission
    }
  }