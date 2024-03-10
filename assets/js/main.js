function toggleMenu() {
  var iconMenu = document.querySelector(".icon_menu");
  var iconDelete = document.querySelector(".icon_x");
  var navResponsive = document.querySelector(".header-navigation-sp");

  if (iconMenu.style.display === "none") {
    iconMenu.style.display = "block";
    iconDelete.style.display = "none";
    navResponsive.style.display = "none";
  } else {
    iconMenu.style.display = "none";
    iconDelete.style.display = "block";
    navResponsive.style.display = "block";
  }
}
//member
var firstName = document.querySelector(".firstname");
var lastName = document.querySelector(".lastname");
var emailAddress = document.querySelector(".emailaddress");

var submitButtonone = document.querySelector(".submit");

function checkInputsOne() {
  if (
    firstName.value.trim() !== "" &&
    lastName.value.trim() !== "" &&
    emailAddress.value.trim() !== ""
  ) {
    submitButtonone.disabled = false;
  } else {
    submitButtonone.disabled = true;
  }
}
firstName.addEventListener("input", checkInputsOne);
lastName.addEventListener("input", checkInputsOne);
emailAddress.addEventListener("input", checkInputsOne);
//MESSAGE

var nameInput = document.querySelector(".name");
var emailInput = document.querySelector(".email");

var submitButton = document.querySelector(".submitButton");

function checkInputs() {
  if (nameInput.value.trim() !== "" && emailInput.value.trim() !== "") {
    submitButtonone.disabled = false;
  } else {
    submitButtonone.disabled = true;
  }
}

nameInput.addEventListener("input", checkInputs);
emailInput.addEventListener("input", checkInputs);
