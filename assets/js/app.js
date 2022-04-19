'use strict'

const adviceId = document.querySelector(".adviceID");
const adviceText = document.querySelector(".advice");
const dice = document.querySelector(".dice-btn");

const getAdvice = function () {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then(function (data) {
        const {
          slip: { id },
          slip: { advice },
        } = data;
        adviceId.innerHTML = id;
        adviceText.innerHTML = advice;
      })
      .catch((err) => console.log(err.message));
};

getAdvice()

dice.addEventListener("click", () => {
  setTimeout(getAdvice, 2000);
});