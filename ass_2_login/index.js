"use strict";

//user can only login with these names.
let usernames = ["yazeen", "ec", "softhouse"];
let form, input;

//Function that calls all other functions in order
//--Don't modify--
function init() {
  initLoginForm();
  initLabel();
  initInput();
  initButton();
}

function initLoginForm() {
  //Add code here to:
  //create and add form element to the Dom.
  form = document.createElement("form");
  document.body.appendChild(form); 
}

function initLabel() {
  //Add code here to:
  let label = document.createElement("label");
  label.textContent = "username";
  form.appendChild(label);
  //create label element and set the lable to "username" (TIP: use .textContent).
  //Add it to the form element. (TIP: use .appendChild).
}

function initInput() {
  //Add code here to:
  input = document.createElement("input");
  input.required = true;
  form.appendChild(input);
  //create input element and set it to be requried (TIP: use .required = true).
  //Add it to the form element. (TIP: use .appendChild).
}

function initButton() {
  //create button element and set the text to "login" (TIP: use .textContent)
  ////Add it to the form element. (TIP: use .appendChild).
  let button = document.createElement("button");
  button.textContent = "login";
  form.appendChild(button);
  //Add click eventListener for button and call validateLoginInfo function inside it.
  //if validateLoginInfo is true alert user with "Welcome" text.
  //if validateLoginInfo is false add border style to the input element: "3px solid red". (TIP: use .style.border).
  let defaultBorder = input.style.border;
  button.addEventListener("click", function(e) {
    e.preventDefault();
    if (validateLoginInfo()) {
      input.style.border = defaultBorder;
      alert("Welcome " + input.value);
    }
    else {
      input.style.border = "3px solid red";
    }
  });
}

function validateLoginInfo() {
  return usernames.includes(input.value);
  //Get the input using form input element (TIP: use .value)
  //if the username is in the usernames array return true if not return false.
}

//Write code here to call the init function only after the dom has been loaded (TIP: check "DOMContentLoaded" event)
window.addEventListener("DOMContentLoaded", () => {
  init();
});