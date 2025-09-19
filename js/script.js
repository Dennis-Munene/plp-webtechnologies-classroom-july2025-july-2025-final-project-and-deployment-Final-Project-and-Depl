// -------------------------
// Mobile Navigation Toggle
// -------------------------
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("header nav ul");
  const toggleBtn = document.createElement("button");
  
  toggleBtn.textContent = "☰"; // Hamburger icon
  toggleBtn.classList.add("menu-toggle");
  
  // Insert toggle button before nav
  document.querySelector("header nav").prepend(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});

// -------------------------
// Contact Form Validation
// -------------------------
function validateForm(event) {
  event.preventDefault(); // Prevent form from submitting until validated

  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");

  if (!name.value.trim()) {
    alert("Please enter your name.");
    name.focus();
    return false;
  }

  if (!email.value.trim() || !email.value.includes("@")) {
    alert("Please enter a valid email.");
    email.focus();
    return false;
  }

  if (!message.value.trim()) {
    alert("Please enter your message.");
    message.focus();
    return false;
  }

  alert("Thank you! Your form has been submitted.");
  document.querySelector("form").reset();
  return true;
}
