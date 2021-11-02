const btn = document.getElementById("cta-email");
const input = document.querySelector(".input-email");
const error = document.querySelector(".error");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (input.value === "" || !input.value.match(emailValidation)) {
    error.style.opacity = 1;
  } else {
    error.style.opacity = 0;
  }
});
