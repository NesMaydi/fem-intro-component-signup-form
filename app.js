const claimBtn = document.getElementById("claim-btn");

const checkValidityInputs = () => {
  const inputField = document.getElementsByClassName("form-info");
  const errorLogo = document.getElementsByClassName("error-logo");
  const errorTxt = document.getElementsByClassName("txt-error");

  for (let i = 0; i < inputField.length; i++) {
    inputField[i].classList.toggle("form-error");
  }

  for (let j = 0; j < errorLogo.length; j++) {
    errorLogo[j].classList.toggle("active");
  }

  for (let k = 0; k < errorTxt.length; k++) {
    errorTxt[k].classList.toggle("active");
  }
};

claimBtn.addEventListener("click", () => {
  checkValidityInputs();
});

// add resize function :) 