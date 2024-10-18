document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear all error messages
    document.querySelectorAll(".error").forEach(function (error) {
      error.style.display = "none";
    });

    // Validate form
    let isValid = true;

    // First Name Validation
    const firstName = document.getElementById("firstName").value.trim();
    if (!firstName) {
      document.getElementById("firstNameError").style.display = "block";
      isValid = false;
    }

    // Last Name Validation
    const lastName = document.getElementById("lastName").value.trim();
    if (!lastName) {
      document.getElementById("lastNameError").style.display = "block";
      isValid = false;
    }

    // Email Validation
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!email || !emailPattern.test(email)) {
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    }

    // Query Type Validation
    const queryType = document.querySelector('input[name="queryType"]:checked');
    if (!queryType) {
      document.getElementById("queryTypeError").style.display = "block";
      isValid = false;
    }

    // Message Validation
    const message = document.getElementById("message").value.trim();
    if (!message) {
      document.getElementById("messageError").style.display = "block";
      isValid = false;
    }

    // Consent Validation
    const consent = document.getElementById("consent").checked;
    if (!consent) {
      document.getElementById("consentError").style.display = "block";
      isValid = false;
    }

    if (isValid) {
      // Show alert for success
      alert("Thank you for filling out the form. Have a great day.");

      // Reset the form
      document.getElementById("contactForm").reset();
    }
  });
