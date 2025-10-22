const form = document.getElementById("contactForm");
const successEl = document.getElementById("success");

function setError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearErrors() {
  ["error-fullName", "error-email", "error-subject", "error-message"].forEach(
    (id) => (document.getElementById(id).textContent = "")
  );
  successEl.hidden = true;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();

  let valid = true;
  const name = form.fullName.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  if (!name) {
    setError("error-fullName", "Full name is required.");
    valid = false;
  }
  if (!email) {
    setError("error-email", "Email is required.");
    valid = false;
  } else if (!isValidEmail(email)) {
    setError("error-email", "Please enter a valid email address.");
    valid = false;
  }
  if (!subject) {
    setError("error-subject", "Subject is required.");
    valid = false;
  }
  if (!message) {
    setError("error-message", "Message is required.");
    valid = false;
  } else if (message.length < 10) {
    setError("error-message", "Message must be at least 10 characters long.");
    valid = false;
  }

  if (valid) {
    successEl.hidden = false;
    form.reset();
  }
});
