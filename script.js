const form = document.getElementById("contactForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
    errorMsg.textContent = "All fields are required.";
    return;
  }

  if (!email.value.match(emailPattern)) {
    errorMsg.textContent = "Please enter a valid email address.";
    return;
  }

  errorMsg.textContent = "";
  alert("Form submitted successfully!");

  form.reset();
});
