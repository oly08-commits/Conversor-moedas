// CONSTANTS

const form = document.querySelector("#form");
const select = document.querySelector("#coin");
const valuesContainer = document.querySelector("#values");
const template = document.querySelector(".template");

// CONV. OBJECT

/* 
const rates = {
  1: {
    name: "Kwanza",
    USD: 990,
    EUR: 1070,
    BRL: 180,
  },

  2: {
    name: "USD",
    KZ: 990,
    EUR: 1.08,
    BRL: 5.4,
  },

  3: {
    name: "Euro",
    KZ: 1070,
    USD: 1.08,
    BRL: 5.8,
  },

  4: {
    name: "Real",
    KZ: 180,
    USD: 5.4,
    EUR: 5.8,
  },
};
 */

// SUBMIT

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = Number(document.querySelector("#convert").value);
  const selected = select.value;

  if (!value || selected === "0") {
    return;
  }

  valuesContainer.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    const clone = template.cloneNode(true);

    clone.removeAttribute("id");
    clone.classList.remove("hide");

    const span = document.createElement("span");

    let total = "";

    if (selected === "1") {
      if (i === 0) {
        total = `USD: ${(value / 990).toFixed(2)}`;
      }

      if (i === 1) {
        total = `EUR: ${(value / 1070).toFixed(2)}`;
      }

      if (i === 2) {
        total = `BRL: ${(value / 180).toFixed(2)}`;
      }
    }

    if (selected === "2") {
      if (i === 0) {
        total = `KZ: ${(value * 990).toFixed(2)}`;
      }

      if (i === 1) {
        total = `EUR: ${(value * 1.08).toFixed(2)}`;
      }

      if (i === 2) {
        total = `BRL: ${(value * 5.4).toFixed(2)}`;
      }
    }

    if (selected === "3") {
      if (i === 0) {
        total = `KZ: ${(value * 1070).toFixed(2)}`;
      }

      if (i === 1) {
        total = `USD: ${(value / 1.08).toFixed(2)}`;
      }

      if (i === 2) {
        total = `BRL: ${(value * 5.8).toFixed(2)}`;
      }
    }

    if (selected === "4") {
      if (i === 0) {
        total = `KZ: ${(value * 180).toFixed(2)}`;
      }

      if (i === 1) {
        total = `USD: ${(value / 5.4).toFixed(2)}`;
      }

      if (i === 2) {
        total = `EUR: ${(value / 5.8).toFixed(2)}`;
      }
    }

    span.textContent = total;

    clone.appendChild(span);

    valuesContainer.appendChild(clone);
  }
});
